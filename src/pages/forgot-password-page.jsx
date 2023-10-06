import React from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import Inputs from '../components/inputs/inputs';
import Form from '../components/form/form';
import AddAction from '../components/add-action/add-action';
import MainLayout from '../components/main-layout/main-layout';

function ForgotPasswordPage() {
    const [values, setValues] = React.useState({email: '' });
    const getHandler = (name) => {
        return (event) => {
          setValues({ ...values, [name]: event.target.value });
        };
      };
    const inputRef = React.useRef(null);

    return (
        <MainLayout>
            <Form
                title='Восстановление пароля'
                button='Восстановить'
                addActions={
                    <>
                        <AddAction text='Вспомнили пароль?' button='Войти' link='/login'/>
                    </>
                }
            >
                <Inputs>
                    <Input
                        type={'email'}
                        placeholder={'Укажите E-mail'}
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

export default ForgotPasswordPage;