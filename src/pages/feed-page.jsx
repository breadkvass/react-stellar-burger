import MainLayout from '../components/main-layout/main-layout';
import Orders from '../components/orders/orders';
import styles from './feed-page.module.css';

function FeedPage() {
    return (
        <MainLayout>
            <div className={styles.feed}>
                <h2 className='text text_type_main-large'>Лента заказов</h2>
                <div className={styles.content}>
                    <Orders />
                    <div className={styles.stats}>

                    </div>
                </div>
            </div>
        </MainLayout>
    ) 
}

export default FeedPage;