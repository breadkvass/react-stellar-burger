import styles from './completed.module.css';

type TCompleted = {
    text: string;
    number: number;
}

function Completed({text, number}: TCompleted) {
    return (
        <div className={styles.completed}>
            <p className={styles.text + ' text text_type_main-medium'}>{text}</p>
            <p className={styles.number + ' text text_type_digits-large'}>{number}</p>
        </div>
    )
}

export default Completed;