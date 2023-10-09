import { useState } from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import Form from '../components/form/form';
import AddAction from '../components/add-action/add-action';
import MainLayout from '../components/main-layout/main-layout';
import Inputs from '../components/inputs/inputs';

function RegistrationPage() {
    const [ nameValue, setNameValue ] = useState('');
    const [ emailValue, setEmailValue ] = useState('');
    const [ passwordValue, setPasswordValue ] = useState('');

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
                    <Input
                        type={passwordShown ? 'text' : 'password'}
                        placeholder={'Пароль'}
                        onChange={(e) => setPasswordValue(e.target.value)}
                        value={passwordValue}
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