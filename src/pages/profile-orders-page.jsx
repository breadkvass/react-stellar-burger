import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import MainLayout from '../components/main-layout/main-layout';
import TwoColumns from '../components/two-columns/two-columns';
import LeftColumnLink from '../components/left-column-link/left-column-link';
import { logout } from '../utils/api';
import styles from './profile-orders-page.module.css';

function ProfileOrdersPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const refreshToken = localStorage.getItem('refreshToken');

    const logoutHandler = () => {
        dispatch(logout(refreshToken));
        navigate('/login');
    }


    return (
        <MainLayout>
            <TwoColumns>
                <div className={styles.left}>
                    <nav className={styles.nav}>
                        <LeftColumnLink link='/profile' text='Профиль'/>
                        <LeftColumnLink link='/profile/orders' text='История'/>
                        <Button
                            className={styles.button + ' text text_type_main-medium text_color_inactive'}
                            onClick={() => logoutHandler()}
                            htmlType="button"
                            type="secondary"
                            size="large"
                        >
                            Выход
                        </Button>
                    </nav>
                </div>
                <div className={styles.right}>
                    История заказов
                </div>
            </TwoColumns>
        </MainLayout>
    )
}

export default ProfileOrdersPage;