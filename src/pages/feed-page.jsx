import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainLayout from '../components/main-layout/main-layout';
import Orders from '../components/orders/orders';
import Stats from '../components/stats/stats';
import styles from './feed-page.module.css';

function FeedPage() {
    
    return (
        <MainLayout>
            <div className={styles.feed}>
                <h2 className='text text_type_main-large'>Лента заказов</h2>
                <div className={styles.content}>
                    <Orders />
                    <Stats />
                </div>
            </div>
        </MainLayout>
    ) 
}

export default FeedPage;