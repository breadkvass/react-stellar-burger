import MainLayout from '../components/main-layout/main-layout';
import TwoColumns from '../components/two-columns/two-columns';
import styles from './profile-orders-page.module.css';
import ProfileLeftColumn from '../components/profile-left-column/profile-left-column';

function ProfileOrdersPage() {
    return (
        <MainLayout>
            <TwoColumns>
                <ProfileLeftColumn />
                <div className={styles.right}>
                    История заказов
                </div>
            </TwoColumns>
        </MainLayout>
    )
}

export default ProfileOrdersPage;