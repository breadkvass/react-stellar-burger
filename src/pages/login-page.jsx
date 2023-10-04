import Form from '../components/form/form';
import Input from '../components/input/input';
import AddAction from '../components/add-action/add-action';
import MainLayout from '../components/main-layout/main-layout';

function LoginPage() {
    return (
        <MainLayout>
    <Form
        title='Вход'
        button='Войти'
        addActions={
            <>
                <AddAction text='Вы — новый пользователь?' button='Зарегистрироваться' />
                <AddAction text='Забыли пароль?' button='Восстановить пароль'/>
            </>
        }
    >
        <Input name='Имя' type='text' />
        <Input name='E-mail' type='email' />
    </Form>
    </MainLayout>
    )
    
}

export default LoginPage;