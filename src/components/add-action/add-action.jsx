import { NavLink as Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './add-action.module.css';

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

AddAction.propTypes = {
    text: PropTypes.string,
    button: PropTypes.string,
    link: PropTypes.string,
}

export default AddAction;