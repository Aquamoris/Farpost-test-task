import styles from './BulletinFeed.module.scss';
import Bulletin from "./Bulletin.tsx";
import {useEffect, useState} from "react";
import type {BulletinType} from "../utils/types/Bulletin.type.ts";
import {getAllBulletins, postBulletins} from "../api/bulletin.api.ts";
import { useHotkeys } from 'react-hotkeys-hook';
import Popup from "./Popup.tsx";
import {checkedBulletinAmount} from "../utils/helpers/checkedBulletinAmount.ts";
import NoteChose from "./NoteChose.tsx";

function BulletinFeed() {
    const [bulletins, setBulletins] = useState<BulletinType[]>([]);
    const [currentBulletin, setCurrentBulletin] = useState<number>(0);
    const [currentBulletinsPage, setCurrentBulletinsPage] = useState<number>(1);

    // Сто процентов в данном случае нужно было решать данную задачу через Map,
    // я подумал об этом решении как только отправил на проверку,
    // мы уже обсудили этот момент на первом тех. собеседовании, но я решил не менять своё первоначальное решение
    // чтобы было честно
    const [approvedBulletins, setApprovedBulletins] = useState(new Set<BulletinType>());
    const [declinedBulletins, setDeclinedBulletins] = useState(new Set<BulletinType>());
    const [escalatedBulletins, setEscalatedBulletins] = useState(new Set<BulletinType>());

    const [popupActive, setPopupActive] = useState<boolean>(false);
    const [operationType, setOperationType] = useState<'decline' | 'escalate' | null>(null);
    const [reason, setReason] = useState<string>('');

    function checkBulletinAvailability(element: BulletinType, setsToCheck: Set<BulletinType>[]) {
        if ('reason' in element) {
            delete element.reason;
        }

        for (const set of setsToCheck) {
            if (set.has(element)) {
                set.delete(element);
            }
        }
    }

    // Need refactotring!
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
            }
            nextBulletin();
        }
    }, [popupActive]);

    // Логгирование для тестирования
    // console.log('render');
    // console.log(approvedBulletins);
    // console.log(declinedBulletins);
    // console.log(escalatedBulletins);

    async function fetchBulletins(page: number = 1) {
        const data = await getAllBulletins(page);

        if (data.length === 0) {
            alert('Объявления закончились');
        }
        setBulletins(data);
    }

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
        if (bulletins.length === 0) {
            fetchBulletins();
            setCurrentBulletin(0);
        }
    });

    useHotkeys('Space', () => {
        if (bulletins.length !== 0) {
            let bulletinToApprove = bulletins[currentBulletin];

            checkBulletinAvailability(bulletinToApprove, [declinedBulletins, escalatedBulletins])

            setApprovedBulletins(prev => new Set([...prev, bulletinToApprove]));

            nextBulletin();
        }
    });

    useHotkeys('Esc', () => {
        if (bulletins.length !== 0) {
            setOperationType('decline');
            setPopupActive(true);
        }
    });

    useHotkeys('Shift + Enter', () => {
        if (bulletins.length !== 0) {
            setOperationType('escalate');
            setPopupActive(true);
        }
    });

    // На беке максимально примитивная логика по категориям объявления выводятся в консоль
    useHotkeys('F7', () => {
        const checkedAmount = checkedBulletinAmount(approvedBulletins, declinedBulletins, escalatedBulletins);

        if (bulletins.length === checkedAmount) {
            Promise.all([
                postBulletins([...approvedBulletins], 'http://localhost:3300/api/approvedBulletins'),
                postBulletins([...declinedBulletins], 'http://localhost:3300/api/declinedBulletins'),
                postBulletins([...escalatedBulletins], 'http://localhost:3300/api/escalatedBulletins'),
            ]);

            setApprovedBulletins(new Set<BulletinType>());
            setDeclinedBulletins(new Set<BulletinType>());
            setEscalatedBulletins(new Set<BulletinType>());

            const newBulletinsPage = currentBulletinsPage + 1;
            setCurrentBulletinsPage(prev => prev + 1);

            fetchBulletins(newBulletinsPage);
            setCurrentBulletin(0);

            window.scrollTo({top: 0, behavior: 'smooth'});
            alert('Объявления отправлены');
        } else {
            alert('Вы обработали не все записи');
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
                {/*<ReasonForm value={reason} handler={reasonChangeHandler} setActive={setPopupActive}/>*/}
                <NoteChose operation={operationType}
                           value={reason}
                           handler={reasonChangeHandler}
                           setActive={setPopupActive} />
            </Popup>
        </div>
    );
}

export default BulletinFeed;