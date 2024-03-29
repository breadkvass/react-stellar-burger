import { SyntheticEvent, useState } from 'react';
import { useDispatch } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import Form from '../components/form/form';
import AddAction from '../components/add-action/add-action';
import MainLayout from '../components/main-layout/main-layout';
import Inputs from '../components/inputs/inputs';
import { login } from '../utils/api';

function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ emailValue, setEmailValue ] = useState<string>('');
    const [ passwordValue, setPasswordValue ] = useState<string>('');
    const [ passwordShown, setPasswordShown ] = useState<boolean>(true);
    
    function submit(e: SyntheticEvent) {
        e.preventDefault();
        dispatch(login(
            {email: emailValue, password: passwordValue},
            () => {
                navigate('/profile');
            }
        ));
    }

    return (
        <MainLayout>
            <Form
                title='Вход'
                button='Войти'
                handleSubmit={(e) => submit(e)}
                addActions={
                    <>
                        <AddAction text='Вы — новый пользователь?' button='Зарегистрироваться' link='/register'/>
                        <AddAction text='Забыли пароль?' button='Восстановить пароль' link='/forgot-password'/>
                    </>
                }
            >
                <Inputs>
                    <Input
                        type={'email'}
                        placeholder={'E-mail'}
                        onChange={(e) => setEmailValue(e.target.value)}
                        value={emailValue}
                        name={'E-mail'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="ml-1"
                    />
                    <Input
                        type={passwordShown ? 'password' : 'text'}
                        placeholder={'Пароль'}
                        onChange={(e) => setPasswordValue(e.target.value)}
                        value={passwordValue}
                        icon={passwordShown ? 'HideIcon' : 'ShowIcon'}
                        name={'Имя'}
                        error={false}
                        onIconClick={() => setPasswordShown(!passwordShown)}
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="ml-1"
                    />
                </Inputs>
            </Form>
        </MainLayout>
    )
}

export default LoginPage;