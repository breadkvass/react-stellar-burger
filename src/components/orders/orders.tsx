import { useSelector } from '../../hooks/hooks';
import OrdersCard from '../orders-card/orders-card';
import styles from './orders.module.css';

function Orders() {
    const orders = useSelector(state => state.feed.orders);
    return (
        <div className={styles.orders + ' custom-scroll'}>
            {orders.map(item => (<OrdersCard key={item._id} order={item} />))}
        </div>
    )
    
}

export default Orders;