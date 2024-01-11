import PropTypes from 'prop-types';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './form.module.css';

function Form({title, children, button, handleSubmit, addActions}) {
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

Form.propTypes = {
    text: PropTypes.string,
    children: PropTypes.object,
    button: PropTypes.string,
    handleSubmit: PropTypes.func,
    addActions: PropTypes.object,
}

export default Form;