import { useState } from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import Inputs from '../components/inputs/inputs';
import Form from '../components/form/form';
import AddAction from '../components/add-action/add-action';
import MainLayout from '../components/main-layout/main-layout';

function ForgotPasswordPage() {
    const [ emailValue, setEmailValue ] = useState('');

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

export default ForgotPasswordPage;