import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './form.module.css';

function Form({title, children, button, addActions}) {
    return(
        <form className={styles.form}>
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