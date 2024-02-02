import { MouseEventHandler, ReactElement, MouseEvent, SyntheticEvent, EventHandler } from "react";
import styles from "./modal-overlay.module.css";


const ModalOverlay = ({closeHandler, children}: {closeHandler: Function, children: ReactElement}) => {
    const onClickHandler = (e: SyntheticEvent<Element, Event>) => {
        e.stopPropagation();
        closeHandler();
    }

    return (
        <div className={styles.overlay} onClick={onClickHandler}>
            {children}
        </div>
    )
}

export default ModalOverlay;