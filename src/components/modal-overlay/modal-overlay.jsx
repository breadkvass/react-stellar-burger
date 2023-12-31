import styles from "./modal-overlay.module.css"
import PropTypes from 'prop-types';

function ModalOverlay(props) {
    const onClickHandler = (e) => {
        e.stopPropagation();
        props.closeHandler();
    }

    return (
        <div className={styles.overlay} onClick={onClickHandler}>
            {props.children}
        </div>
    )
}

export default ModalOverlay;