import React from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import Form from '../components/form/form';
import AddAction from '../components/add-action/add-action';
import MainLayout from '../components/main-layout/main-layout';
import Inputs from '../components/inputs/inputs';

function LoginPage() {
    const [values, setValues] = React.useState({name: '', email: '' });
    const getHandler = (name) => {
        return (event) => {
          setValues({ ...values, [name]: event.target.value });
        };
      };
    const inputRef = React.useRef(null);
    
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
                        onChange={getHandler('name')}
                        value={values.name}
                        name={'Имя'}
                        error={false}
                        ref={inputRef}
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="ml-1"
                    />
                    <Input
                        type={'email'}
                        placeholder={'E-mail'}
                        onChange={getHandler('email')}
                        value={values.email}
                        name={'E-mail'}
                        error={false}
                        ref={inputRef}
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