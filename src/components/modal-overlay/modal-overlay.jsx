import React from "react";
import ReactDOM from "react-dom";
import styles from "./modal-overlay.module.css"
import PropTypes from 'prop-types';

function ModalOverlay(props) {
    return (
        <div className={styles.overlay}>
            {props.children}
        </div>
    )
}

export default ModalOverlay;