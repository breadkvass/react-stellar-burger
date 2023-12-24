import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../components/main-layout/main-layout';
import TwoColumns from '../components/two-columns/two-columns';
import styles from './profile-orders-page.module.css';
import ProfileLeftColumn from '../components/profile-left-column/profile-left-column';
import ProfileOrderCard from '../components/profle-orders-card/profle-orders-card';
import { ORDERS_WS_CONNECTION_START } from '../slices/actions';
import { updateToken } from '../utils/api';

function ProfileOrdersPage() {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const expireInAccToken = useSelector(state => state.auth.expireInAccToken);
    const now = new Date().getTime();
    const payload = `wss://norma.nomoreparties.space/orders?token=${accessToken.split('Bearer ')[1]}`;

    useEffect(() => {
        if (expireInAccToken > now) {
            dispatch({
                type: ORDERS_WS_CONNECTION_START,
                payload: payload
            });
        } else {
            dispatch(updateToken(refreshToken));
            dispatch({
                type: ORDERS_WS_CONNECTION_START,
                payload: payload
            });
        }
    }, []);

    return (
        <MainLayout>
            <TwoColumns>
                <ProfileLeftColumn>
                    <p className='text text_type_main-default text_color_inactive'>В этом разделе вы можете просмотреть свою историю заказов</p>
                </ProfileLeftColumn>
                <div className={styles.right + ' custom-scroll'}>
                    {orders.map(item => (<ProfileOrderCard key={item._id} order={item} />))}
                </div>
            </TwoColumns>
        </MainLayout>
    )
}

export default ProfileOrdersPage;