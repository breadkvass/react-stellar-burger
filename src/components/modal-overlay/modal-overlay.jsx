import PropTypes from 'prop-types';
import styles from "./modal-overlay.module.css"

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

ModalOverlay.propTypes = {
    closeHandler: PropTypes.func,
    children: PropTypes.object,
}


export default ModalOverlay;