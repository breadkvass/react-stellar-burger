import { useState } from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import Inputs from '../components/inputs/inputs';
import Form from '../components/form/form';
import AddAction from '../components/add-action/add-action';
import MainLayout from '../components/main-layout/main-layout';
import { resetPassword } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setResetPassword } from '../slices/profileInputs';

function ForgotPasswordPage() {
    const [ emailValue, setEmailValue ] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <MainLayout>
            <Form
                title='Восстановление пароля'
                button='Восстановить'
                handleSubmit={(e) => {
                    e.preventDefault();
                    dispatch(resetPassword(
                        emailValue,
                        () => {
                            dispatch(setResetPassword());
                            navigate('/reset-password');
                        }
                    ));
                }}
                addActions={<AddAction text='Вспомнили пароль?' button='Войти' link='/login'/>}
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