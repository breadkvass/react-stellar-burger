import { useState } from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import Form from '../components/form/form';
import AddAction from '../components/add-action/add-action';
import MainLayout from '../components/main-layout/main-layout';
import Inputs from '../components/inputs/inputs';

function RegistrationPage() {
    const [values, setValues] = useState({name: '', email: '', password:'' });
    const getHandler = (name) => {
        return (event) => {
          setValues({ ...values, [name]: event.target.value });
        };
    };

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

    return (
        <MainLayout>
            <Form
                title='Регистрация'
                button='Зарегистрироваться'
                addActions={
                    <>
                        <AddAction text='Уже зарегистрированы?' button='Войти' link='/login'/>
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
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="ml-1"
                    />
                    <Input
                        type={passwordShown ? 'text' : 'password'}
                        placeholder={'Пароль'}
                        onChange={getHandler('password')}
                        value={values.password}
                        icon={passwordShown ? 'HideIcon' : 'ShowIcon'}
                        name={'Имя'}
                        error={false}
                        onIconClick={togglePassword}
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="ml-1"
                    />
                </Inputs>
            </Form>
        </MainLayout>
    ) 
}

export default RegistrationPage;