import ReactDOM from "react-dom";
import styles from "./modal.module.css"
import PropTypes from 'prop-types';
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("react-modals");

function Modal(props) {
    return ReactDOM.createPortal(
        (
            <ModalOverlay>
                <div className={styles.modal + props.padding}>
                    <div className={styles.heading}>
                        <h2 className={styles.title + " text text_type_main-large"}>{props.title}</h2>
                        <CloseIcon onClick={props.clickHandler} type="primary" />
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