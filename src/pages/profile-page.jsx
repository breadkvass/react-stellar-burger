import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { toggleNameDisabled, toggleEmailDisabled, setInputsDisabled, setNameUpd, setEmailUpd } from '../slices/profileInputs';
import MainLayout from '../components/main-layout/main-layout';
import TwoColumns from '../components/two-columns/two-columns';
import LeftColumnLink from '../components/left-column-link/left-column-link';
import { logout } from '../utils/api';
import { updateUser, updateToken, getUser } from '../utils/api';
import styles from './profile-page.module.css';


function ProfilePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { nameInputDisabled, emailInputDisabled, passwordInputDisabled } = useSelector(state => state.profileInputs);
    const { nameUpd, emailUpd } = useSelector(state => state.profileInputs.userUpd);
    const { name, email } = useSelector(state => state.auth.user);
    const { accessToken, expireInAccToken } = useSelector(state => state.auth);

    const refreshToken = localStorage.getItem('refreshToken')

    const logoutHandler = () => {
        dispatch(logout(refreshToken));
        navigate('/login');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const now = new Date().getTime();
        if (expireInAccToken > now) {
            
            dispatch(updateUser(nameUpd, emailUpd, accessToken));
            dispatch(setInputsDisabled());
        } else {
            dispatch(updateToken(refreshToken));
            dispatch(updateUser(nameUpd, emailUpd, accessToken));
            dispatch(setInputsDisabled());
        }
    }

    const handleReset = (e) => {
        e.preventDefault();
        dispatch(setNameUpd(name));
        dispatch(setEmailUpd(email));
        dispatch(setInputsDisabled());
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
                    <form className={styles.form + ' form-profile'} onSubmit={handleSubmit}>
                        <Input 
                            type={'text'}
                            placeholder={'Имя'}
                            onChange={(e) => {dispatch(setNameUpd(e.target.value))}}
                            value={nameUpd}
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
                            onChange={(e) => {dispatch(setEmailUpd(e.target.value))}}
                            value={emailUpd}
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
                            value={'password'}
                            name={'Пароль'}
                            disabled={passwordInputDisabled}
                            icon={'EditIcon'}
                            onIconClick={() => {}}
                            error={false}
                            errorText={'Ошибка'}
                            size={'default'}
                            extraClass="ml-1"
                        />
                        { name !== nameUpd || email !== emailUpd ?
                            <div className={styles.edit__buttons}>
                                <Button htmlType="button" type="secondary" size="medium" onClick={handleReset}>
                                    Отмена
                                </Button>
                                <Button htmlType="submit" type="primary" size="medium">
                                    Сохранить
                                </Button>
                             </div>
                        : null }
                    </form>
                </div>
            </TwoColumns>
        </MainLayout>
    )
}

export default ProfilePage;