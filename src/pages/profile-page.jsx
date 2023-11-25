import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { setName, toggleNameDisabled, setEmail, toggleEmailDisabled, setPassword, togglePasswordDisabled } from '../slices/profileInputs';
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
                            onChange={(e) => dispatch(setName(e.target.value))}
                            value={name.value}
                            name={'Имя'}
                            disabled={name.disabled}
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
                            value={email.value}
                            name={'E-mail'}
                            disabled={email.disabled}
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
                            onChange={(e) => dispatch(setPassword(e.target.value))}
                            value={password.value}
                            name={'Пароль'}
                            disabled={password.disabled}
                            icon={'EditIcon'}
                            onIconClick={() => dispatch(togglePasswordDisabled())}
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