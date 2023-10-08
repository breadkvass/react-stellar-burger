import { useState } from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import Form from '../components/form/form';
import AddAction from '../components/add-action/add-action';
import MainLayout from '../components/main-layout/main-layout';
import Inputs from '../components/inputs/inputs';

function LoginPage() {
    const [ nameValue, setNameValue ] = useState('');
    const [ emailValue, setEmailValue ] = useState('');

    return (
        <MainLayout>
            <Form
                title='Вход'
                button='Войти'
                addActions={
                    <>
                        <AddAction text='Вы — новый пользователь?' button='Зарегистрироваться' link='/register'/>
                        <AddAction text='Забыли пароль?' button='Восстановить пароль' link='/forgot-password'/>
                    </>
                }
            >
                <Inputs>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={(e) => setNameValue(e.target.value)}
                        value={nameValue}
                        name={'Имя'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="ml-1"
                    />
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
                </Inputs>
            </Form>
        </MainLayout>
    )
}

export default LoginPage;