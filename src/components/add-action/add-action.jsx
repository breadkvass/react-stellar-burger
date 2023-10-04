import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './add-action.module.css';
import { NavLink as Link } from 'react-router-dom';

function AddAction({text, button, link}) {
    return (
        <div className={styles.action}>
            <p className='text text_type_main-default text_color_inactive'>{text}</p>
            <Link to={{ pathname: link }}>
                <Button htmlType="button" type="secondary" size="medium" padding="none" >{button}</Button>
            </Link>
        </div>
    )
}

export default AddAction;