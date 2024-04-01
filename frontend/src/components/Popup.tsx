import React from 'react';
import styles from './Popup.module.scss';
import classNames from "classnames";
import {useHotkeys} from "react-hotkeys-hook";

interface Props {
    active: boolean,
    setActive: (arg0: boolean) => void,
    children: React.ReactNode
}

function Popup({ active, setActive, children }: Props) {

    useHotkeys('Enter', () => {
        setActive(false);
    })

    return (
        <div className={classNames(styles.modal, {
            [styles.active]: active
        })} onClick={() => setActive(false)}>
            <div className={classNames(styles.modalContent, {
                [styles.active]: active
            })} onClick={e => e.stopPropagation()}>
                { children }
            </div>
        </div>
    );
}

export default Popup;