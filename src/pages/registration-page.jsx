import React from 'react';
import Form from '../components/form/form';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import AddAction from '../components/add-action/add-action';
import MainLayout from '../components/main-layout/main-layout';
import styles from './registration-page.module.css';

function RegistrationPage() {
    const [values, setValues] = React.useState({name: '', email: '', password:'' });
    const getHandler = (name) => {
        return (event) => {
          setValues({ ...values, [name]: event.target.value });
        };
      };
    const inputRef = React.useRef(null);

    const [passwordShown, setPasswordShown] = React.useState(false);
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
                <div className={styles.inputs}>
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
                <Input
                    type={passwordShown ? 'text' : 'password'}
                    placeholder={'Пароль'}
                    onChange={getHandler('password')}
                    value={values.password}
                    icon={passwordShown ? 'HideIcon' : 'ShowIcon'}
                    name={'Имя'}
                    error={false}
                    ref={inputRef}
                    onIconClick={togglePassword}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="ml-1"
                />
                </div>
            </Form>
        </MainLayout>
    ) 
}

export default RegistrationPage;