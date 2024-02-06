import { useDispatch } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import LeftColumnLink from '../left-column-link/left-column-link';
import { logout } from '../../utils/api';
import styles from './profile-left-column.module.css';
import { ReactNode } from 'react';

type TProfileLeftColumn = {
    children: ReactNode;
}

function ProfileLeftColumn({children}: TProfileLeftColumn) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const refreshToken = localStorage.getItem('refreshToken');

    const logoutHandler: Function = () => {
        if (refreshToken != null) {
            dispatch(logout(refreshToken));
            navigate('/login');
        } else {
        console.log('Ошибка токена')
        }
    }

    return (
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
            {children}
        </div>
    )
}

export default ProfileLeftColumn;