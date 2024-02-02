import styles from './stats-board-column.module.css';

type TStatsBoardColumn = {
    title: string;
    numbers: number[];
    color: string;
}

function StatsBoardColumn({title, numbers, color}: TStatsBoardColumn) {
    return (
        <div className={styles.column}>
            <h3 className='text text_type_main-medium'>{title}</h3>
            <ul className={styles.list}>
                {numbers.splice(0,20).map(item => <li key={item} className='text text_type_digits-default' style={{color: color}}>{item}</li>)}
            </ul>
        </div>
    )
}

export default StatsBoardColumn;