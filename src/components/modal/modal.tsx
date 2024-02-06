import ReactDOM from "react-dom";
import { useEffect, useCallback, SyntheticEvent, MouseEventHandler, ReactNode } from 'react';
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";

type TProps = {
    padding?: string;
    title?: string;
    children: ReactNode;
    closeHandler: Function;
}

const modalRoot = document.getElementById("react-modals") as HTMLElement;

const stopPropagation = (e: SyntheticEvent<Element, Event>) => e.stopPropagation();

function Modal(props: TProps) {
    const escHandler = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            e.stopPropagation();
            props.closeHandler();
        }
    }, []);
    
    useEffect(() => {
        document.addEventListener("keydown", escHandler, false);

        return () => {
            document.removeEventListener("keydown", escHandler, false);
        };

    }, [escHandler]);
    
    const onClickHandler = () => {
        props.closeHandler();
    }

    return ReactDOM.createPortal(
        (
            <ModalOverlay closeHandler={props.closeHandler}>
                <div className={styles.modal + props.padding} onClick={stopPropagation}>
                    <div className={styles.heading}>
                        <h2 className={"text text_type_main-large"}>{props.title}</h2>
                        <CloseIcon onClick={onClickHandler} type="primary" />
                    </div>
                    <div className={styles.content}>
                        {props.children}
                    </div>
                </div>
            </ModalOverlay>
        ), 
            modalRoot
    );
}

export default Modal;