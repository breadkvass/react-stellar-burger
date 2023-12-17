import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import LeftColumnLink from '../left-column-link/left-column-link';
import { logout } from '../../utils/api';
import styles from './profile-left-column.module.css';

function ProfileLeftColumn({children}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const refreshToken = localStorage.getItem('refreshToken');

    const logoutHandler = () => {
        dispatch(logout(refreshToken));
        navigate('/login');
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
            {/* <p className='text text_type_main-default text_color_inactive'>
                В этом разделе вы можете изменить свои персональные данные
            </p> */}
        </div>
    )
}

ProfileLeftColumn.propTypes = {
    children: PropTypes.object,
}

export default ProfileLeftColumn;