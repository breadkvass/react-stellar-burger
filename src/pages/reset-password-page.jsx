import React from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import Form from '../components/form/form';
import AddAction from '../components/add-action/add-action';
import MainLayout from '../components/main-layout/main-layout';
import Inputs from '../components/inputs/inputs';

function ResetPasswordPage() {
    const [values, setValues] = React.useState({name: '', password:'' });
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
                title='Восстановление пароля'
                button='Сохранить'
                addActions={
                    <>
                        <AddAction text='Вспомнили пароль?' button='Войти' link='/login'/>
                    </>
                }
            >
                <Inputs>
                    <Input
                        type={passwordShown ? 'text' : 'password'}
                        placeholder={'Введите новый пароль'}
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
                    <Input
                        type={'text'}
                        placeholder={'Введите код из письма'}
                        onChange={getHandler('name')}
                        value={values.name}
                        name={'Имя'}
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

export default ResetPasswordPage;