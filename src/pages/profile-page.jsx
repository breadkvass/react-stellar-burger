import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { toggleNameDisabled, toggleEmailDisabled, togglePasswordDisabled } from '../slices/profileInputs';
import { setName, setEmail } from '../slices/auth';
import MainLayout from '../components/main-layout/main-layout';
import TwoColumns from '../components/two-columns/two-columns';
import LeftColumnLink from '../components/left-column-link/left-column-link';
import Inputs from '../components/inputs/inputs';
import styles from './profile-page.module.css';
import { useState } from 'react';
import { logout } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { updateUser, updateToken } from '../utils/api';


function ProfilePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { nameInputDisabled, emailInputDisabled, passwordInputDisabled } = useSelector(state => state.profileInputs);
    const { name, email } = useSelector(state => state.auth.user);
    const { accessToken } = useSelector(state => state.auth);
    const { expireInAccToken } = useSelector(state => state.auth.expireInAccToken);
    const { password, setPassword } = useState('');

    const refreshToken = localStorage.getItem('refreshToken')

    const logoutHandler = () => {
        dispatch(logout(refreshToken));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (expireInAccToken - new Date() < 0) {
            dispatch(updateToken(refreshToken));
            dispatch(updateUser(name, email, accessToken));
        } else {
            dispatch(updateUser(name, email, accessToken));
        }
        
    }

    return (
        <MainLayout>
            <TwoColumns>
                <div className={styles.left}>
                    <nav className={styles.nav}>
                        <LeftColumnLink link='/profile' text='Профиль'/>
                        <LeftColumnLink link='/' text='История'/>
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
                    <p className='text text_type_main-default text_color_inactive'>
                        В этом разделе вы можете изменить свои персональные данные
                    </p>
                </div>
                <div className={styles.right}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <Input 
                            type={'text'}
                            placeholder={'Имя'}
                            onChange={(e) => dispatch(setName(e.target.value))}
                            value={name}
                            name={'Имя'}
                            disabled={nameInputDisabled}
                            error={false}
                            icon={'EditIcon'}
                            onIconClick={() => dispatch(toggleNameDisabled())}
                            errorText={'Ошибка'}
                            size={'default'}
                            extraClass="ml-1"
                        />
                        <Input 
                            type={'email'}
                            placeholder={'E-mail'}
                            onChange={(e) => dispatch(setEmail(e.target.value))}
                            value={email}
                            name={'E-mail'}
                            disabled={emailInputDisabled}
                            error={false}
                            icon={'EditIcon'}
                            onIconClick={() => dispatch(toggleEmailDisabled())}
                            errorText={'Ошибка'}
                            size={'default'}
                            extraClass="ml-1"
                        />
                        <Input
                            type={'password'}
                            placeholder={'Пароль'}
                            onChange={() =>{}}
                            value={''}
                            name={'Пароль'}
                            disabled={passwordInputDisabled}
                            icon={'EditIcon'}
                            onIconClick={() => dispatch(togglePasswordDisabled())}
                            error={false}
                            errorText={'Ошибка'}
                            size={'default'}
                            extraClass="ml-1"
                        />
                        <div className={styles.edit__buttons}>
                            <Button htmlType="button" type="secondary" size="medium">
                                Отмена
                            </Button>
                            <Button htmlType="submit" type="primary" size="medium">
                                Сохранить
                            </Button>
                        </div>
                    </form>
                    
                </div>
            </TwoColumns>
        </MainLayout>
    )
}

export default ProfilePage;