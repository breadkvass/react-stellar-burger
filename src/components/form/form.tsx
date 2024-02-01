import { ReactNode, FormEventHandler } from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './form.module.css';

type TForm = {
    title: string;
    children: ReactNode; 
    button: string;
    handleSubmit: FormEventHandler<HTMLFormElement>;
    addActions: HTMLDivElement;
}

function Form({title, children, button, handleSubmit, addActions}: TForm) {
    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <h4 className={styles.title + ' text text_type_main-medium'}>{title}</h4>
            {children}
            <Button htmlType="submit" type="primary" size="medium">{button}</Button>
            <div className={styles.addActions}>
                {addActions}
            </div>
        </form>
    )
}

export default Form;