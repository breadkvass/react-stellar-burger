import { useSelector } from 'react-redux';
import Completed from '../completed/completed';
import StatsBoardColumn from '../stats-board-column/stats-board-column';
import styles from './stats.module.css';

function Stats() {
    const orders = useSelector(state => state.feed.orders);
    const ordersReady = orders.filter(order => order.status === 'done').map(item => item.number);
    const ordersInProcess = orders.filter(order => order.status !== 'done').map(item => item.number);

    return (
        <div className={styles.stats}>
            <div className={styles.columns}>
                <StatsBoardColumn title='Готовы:' numbers={ordersReady} color='#00CCCC'/>
                <StatsBoardColumn title='В процессе:' numbers={ordersInProcess} color='white'/>
            </div>
            <Completed text='Выполнено за все время:' number='28 752' />
            <Completed text='Выполнено за сегодня:' number='138' />
        </div>
    )
}

export default Stats;