import { useState } from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import Form from '../components/form/form';
import AddAction from '../components/add-action/add-action';
import MainLayout from '../components/main-layout/main-layout';
import Inputs from '../components/inputs/inputs';
import { newPassword } from '../utils/api';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ResetPasswordPage() {
    const [ passwordValue, setPasswordValue ] = useState('');
    const [ codeValue, setCodeValue ] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

    return (
        <MainLayout>
            <Form
                title='Восстановление пароля'
                button='Сохранить'
                handleSubmit={(e) => {
                    e.preventDefault();
                    dispatch(newPassword(
                        passwordValue,
                        codeValue,
                        () => {navigate('/login')}
                    ));
                }}
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
                    <Input
                        type={'text'}
                        placeholder={'Введите код из письма'}
                        onChange={(e) => setCodeValue(e.target.value)}
                        value={codeValue}
                        name={'Имя'}
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

export default ResetPasswordPage;