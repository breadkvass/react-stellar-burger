import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import {
    PROFILE_NAME_SET,
    PROFILE_NAME_TOGGLE_DISABLED,
    PROFILE_EMAIL_SET,
    PROFILE_EMAIL_TOGGLE_DISABLED,
    PROFILE_PASSWORD_SET,
    PROFILE_PASSWORD_TOGGLE_DISABLED
} from '../services/actions/profile-page';
import MainLayout from '../components/main-layout/main-layout';
import TwoColumns from '../components/two-columns/two-columns';
import LeftColumnLink from '../components/left-column-link/left-column-link';
import Inputs from '../components/inputs/inputs';
import styles from './profile-page.module.css';


function ProfilePage() {
    const dispatch = useDispatch();
    const {name, email, password} = useSelector(state => state.profileInputs);

    return (
        <MainLayout>
            <TwoColumns>
                <div className={styles.left}>
                    <nav className={styles.nav}>
                        <LeftColumnLink link='/profile' text='Профиль'/>
                        <LeftColumnLink link='/' text='История'/>
                        <LeftColumnLink link='/' text='Выход'/>
                    </nav>
                    <p className='text text_type_main-default text_color_inactive'>
                        В этом разделе вы можете изменить свои персональные данные
                    </p>
                </div>
                <div className={styles.right}>
                    <Inputs>
                        <Input 
                            type={'text'}
                            placeholder={'Имя'}
                            onChange={(e) => dispatch({type: PROFILE_NAME_SET, value: e.target.value})}
                            value={name.value}
                            name={'Имя'}
                            disabled={name.disabled}
                            error={false}
                            icon={'EditIcon'}
                            onIconClick={() => dispatch({type: PROFILE_NAME_TOGGLE_DISABLED})}
                            errorText={'Ошибка'}
                            size={'default'}
                            extraClass="ml-1"
                        />
                        <Input 
                            type={'email'}
                            placeholder={'E-mail'}
                            onChange={(e) => dispatch({type: PROFILE_EMAIL_SET, value: e.target.value})}
                            value={email.value}
                            name={'E-mail'}
                            disabled={email.disabled}
                            error={false}
                            icon={'EditIcon'}
                            onIconClick={() => dispatch({type: PROFILE_EMAIL_TOGGLE_DISABLED})}
                            errorText={'Ошибка'}
                            size={'default'}
                            extraClass="ml-1"
                        />
                        <Input
                            type={'password'}
                            placeholder={'Пароль'}
                            onChange={(e) => dispatch({type: PROFILE_PASSWORD_SET, value: e.target.value})}
                            value={password.value}
                            name={'Пароль'}
                            disabled={password.disabled}
                            icon={'EditIcon'}
                            onIconClick={() => dispatch({type: PROFILE_PASSWORD_TOGGLE_DISABLED})}
                            error={false}
                            errorText={'Ошибка'}
                            size={'default'}
                            extraClass="ml-1"
                        />
                    </Inputs>
                </div>
            </TwoColumns>
        </MainLayout>
    )
}

export default ProfilePage;