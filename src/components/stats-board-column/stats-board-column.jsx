import styles from './stats-board-column.module.css';

function StatsBoardColumn({title, number1, number2, number3, color}) {
    return (
        <div className={styles.column}>
            <h3 className='text text_type_main-medium'>{title}</h3>
            <ul className={styles.list}>
                <li className='text text_type_digits-default' style={{color: color}}>{number1}</li>
                <li className='text text_type_digits-default' style={{color: color}}>{number2}</li>
                <li className='text text_type_digits-default' style={{color: color}}>{number3}</li>
            </ul>
        </div>
    )
}

export default StatsBoardColumn;