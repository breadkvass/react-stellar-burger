import { useEffect } from 'react';
import { useDispatch } from '../hooks/hooks';
import MainLayout from '../components/main-layout/main-layout';
import Orders from '../components/orders/orders';
import Stats from '../components/stats/stats';
import { FEED_WS_CONNECTION_START } from '../slices/actions';
import styles from './feed-page.module.css';

function FeedPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: FEED_WS_CONNECTION_START,
            payload: 'wss://norma.nomoreparties.space/orders/all'
        });
      }, []);

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