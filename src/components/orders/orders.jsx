import OrdersCard from '../orders-card/orders-card';
import styles from './orders.module.css';

function Orders() {
    return (
        <div className={styles.orders + ' custom-scroll'}>
            <OrdersCard
                number='#034535'
                date='Сегодня, 16:20 i-GMT+3'
                name='Death Star Starship Main бургер'
                img1='https://code.s3.yandex.net/react/code/core.png'
                img2='https://code.s3.yandex.net/react/code/sp_1.png'
                img3='https://code.s3.yandex.net/react/code/mineral_rings.png'
                price='480' />
            <OrdersCard
                number='#034534'
                date='Сегодня, 13:20 i-GMT+3'
                name='Interstellar бургер'
                img1='https://code.s3.yandex.net/react/code/sauce-01.png'
                img2='https://code.s3.yandex.net/react/code/sauce-03.png'
                img3='https://code.s3.yandex.net/react/code/bun-01.png'
                price='560' />
        </div>
    )
    
}

export default Orders;