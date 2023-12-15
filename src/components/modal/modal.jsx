import ReactDOM from "react-dom";
import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";

const modalRoot = document.getElementById("react-modals");

const stopPropagation = e => e.stopPropagation();

function Modal(props) {
    const escHandler = useCallback((e) => {
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
    
    const onClickHandler = (e) => {
        e.stopPropagation();
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

Modal.propTypes = {
    closeHandler: PropTypes.func,
    padding: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.object,
}

export default Modal;