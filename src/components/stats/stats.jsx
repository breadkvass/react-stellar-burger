import Completed from '../completed/completed';
import StatsBoardColumn from '../stats-board-column/stats-board-column';
import styles from './stats.module.css';

function Stats() {
    return (
        <div className={styles.stats}>
            <div className={styles.columns}>
                <StatsBoardColumn title='Готовы:' number1='034533' number2='034532' number3='034530' color='#00CCCC'/>
                <StatsBoardColumn title='В процессе:' number1='034538' number2='034541' number3='034542' color='white'/>
            </div>
            <Completed text='Выполнено за все время:' number='28 752' />
            <Completed text='Выполнено за сегодня:' number='138' />
        </div>
    )
}

export default Stats;