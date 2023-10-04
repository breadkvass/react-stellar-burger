import styles from './form.module.css';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

function Form({title, children, button, addActions}) {
    return(
        <>
        <div className={styles.form}>
            <h4 className={styles.title + ' text text_type_main-medium'}>{title}</h4>
            {children}
            <Button htmlType="button" type="primary" size="medium">{button}</Button>
        </div>
        <div className={styles.addActions}>
            {addActions}
        </div>
        </>
    )
}

export default Form;