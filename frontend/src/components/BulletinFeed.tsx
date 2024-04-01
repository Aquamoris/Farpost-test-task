import styles from './BulletinFeed.module.scss';
import Bulletin from "./Bulletin.tsx";
import {useEffect, useState} from "react";
import type {BulletinType} from "../utils/types/Bulletin.type.ts";
import {getAllBulletins} from "../api/bulletin.api.ts";
import { useHotkeys } from 'react-hotkeys-hook';
import Popup from "./Popup.tsx";
import ReasonForm from "./ReasonForm.tsx";

function BulletinFeed() {
    const [bulletins, setBulletins] = useState<BulletinType[]>([]);
    const [currentBulletin, setCurrentBulletin] = useState<number>(0);

    const [approvedBulletins, setApprovedBulletins] = useState(new Set<BulletinType>());
    // const [declinedBulletins, setDeclinedBulletins] = useState<BulletinType[]>([]);
    const [declinedBulletins, setDeclinedBulletins] = useState(new Set<BulletinType>());
    // const [escalatedBulletins, setEscalatedBulletins] = useState<BulletinType[]>([]);
    const [escalatedBulletins, setEscalatedBulletins] = useState(new Set<BulletinType>());

    const [popupActive, setPopupActive] = useState<boolean>(false);
    const [operationType, setOperationType] = useState<'decline' | 'escalate' | null>(null);
    const [reason, setReason] = useState<string>('');

    function checkBulletinAvailability(element: BulletinType, setsToCheck: Set<BulletinType>[]) {
        for (const set of setsToCheck) {
            if (set.has(element)) {
                set.delete(element);
            }
        }
    }

    useEffect(() => {
        if (bulletins.length > 0 && !popupActive) {
            const bulletinToOperation = bulletins[currentBulletin];

            if (operationType === 'decline') {
                checkBulletinAvailability(bulletinToOperation, [approvedBulletins, escalatedBulletins])

                bulletinToOperation['reason'] = reason;

                setDeclinedBulletins(prev => new Set([...prev, bulletinToOperation]));
            }
            if (operationType === 'escalate') {
                checkBulletinAvailability(bulletinToOperation, [approvedBulletins, declinedBulletins])

                if (reason) {
                    bulletinToOperation['reason'] = reason;
                }

                setEscalatedBulletins(prev => new Set([...prev, bulletinToOperation]));
                // setEscalatedBulletins([...escalatedBulletins, bulletinToEscalate]);
            }
            nextBulletin();
        }
    }, [popupActive]);

    console.log('render');
    console.log(approvedBulletins);
    console.log(declinedBulletins);
    console.log(escalatedBulletins);

    const reasonChangeHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setReason(e.currentTarget.value);
    };

    const nextBulletin = () => {
        setCurrentBulletin((prev) => {
            if (currentBulletin === bulletins.length - 1) {
                return 0;
            } else {
                return prev + 1
            }
        });
        setReason('');
        setOperationType(null);
    };

    useHotkeys('Enter', () => {
        async function fetchBulletins() {
            const data = await getAllBulletins();

            setBulletins(data);
        }

        if (bulletins.length === 0) {
            fetchBulletins();
            setCurrentBulletin(0);
        }
    });

    useHotkeys('Space', () => {
        if (bulletins.length !== 0) {
            let bulletinToApprove = bulletins[currentBulletin];

            checkBulletinAvailability(bulletinToApprove, [declinedBulletins, escalatedBulletins])

            // if (declinedBulletins.has(bulletinToApprove)) {
            //     declinedBulletins.delete(bulletinToApprove);
            // }
            //
            // if (escalatedBulletins.has(bulletinToApprove)) {
            //     escalatedBulletins.delete(bulletinToApprove);
            // }

            setApprovedBulletins(prev => new Set([...prev, bulletinToApprove]));

            nextBulletin();
        }
    });

    useHotkeys('Esc', () => {
        if (bulletins.length !== 0) {
            setPopupActive(true);
            setOperationType('decline');
        }
    });

    useHotkeys('Shift + Enter', () => {
        if (bulletins.length !== 0) {
            setPopupActive(true);
            setOperationType('escalate');
        }
    });


    return (
        <div className={styles.wrapper}>
            {bulletins.length === 0
                ? <h3>Нажмите 'Enter' чтобы загрузить новые объявления</h3>
                : <div className={styles.feed}>
                    {
                        bulletins.map((b, index) => (
                            <div onClick={() => setCurrentBulletin(index)} key={b.id}>
                                <Bulletin
                                    id={b.id}
                                    publishDate={b.publishDate}
                                    publishDateString={b.publishDateString}
                                    ownerId={b.ownerId}
                                    ownerLogin={b.ownerLogin}
                                    bulletinSubject={b.bulletinSubject}
                                    bulletinText={b.bulletinText}
                                    bulletinImages={b.bulletinImages}
                                    currentBulletin={currentBulletin}
                                    index={index}
                                />
                            </div>
                        ))
                    }
                </div>
            }
            <Popup active={popupActive} setActive={setPopupActive}>
                <ReasonForm value={reason} handler={reasonChangeHandler}/>
            </Popup>
        </div>
    );
}

export default BulletinFeed;