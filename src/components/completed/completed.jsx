import styles from './completed.module.css';

function Completed({text, number}) {
    return (
        <div className={styles.completed}>
            <p className={styles.text + ' text text_type_main-medium'}>{text}</p>
            <p className={styles.number + ' text text_type_digits-large'}>{number}</p>
        </div>
    )
}

export default Completed;