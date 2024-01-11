import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { toggleNameDisabled, toggleEmailDisabled, setInputsDisabled, setNameUpd, setEmailUpd } from '../slices/profileInputs';
import MainLayout from '../components/main-layout/main-layout';
import TwoColumns from '../components/two-columns/two-columns';
import ProfileLeftColumn from '../components/profile-left-column/profile-left-column';
import { updateUser } from '../utils/api';
import styles from './profile-page.module.css';


function ProfilePage() {
    const dispatch = useDispatch();

    const { nameInputDisabled, emailInputDisabled, passwordInputDisabled } = useSelector(state => state.profileInputs);
    const { nameUpd, emailUpd } = useSelector(state => state.profileInputs.userUpd);
    const { name, email } = useSelector(state => state.auth.user);
    const accessToken = localStorage.getItem('accessToken');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(nameUpd, emailUpd, accessToken));
        dispatch(setInputsDisabled());
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
                <ProfileLeftColumn>
                    <p className='text text_type_main-default text_color_inactive'>
                        В этом разделе вы можете изменить свои персональные данные
                    </p>
                </ProfileLeftColumn>
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
            </TwoColumns>
        </MainLayout>
    )
}

export default ProfilePage;