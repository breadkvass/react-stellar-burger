import { NavLink as Link } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './add-action.module.css';

type TAddAction = {
    text: string;
    button: string;
    link: string;
};

const AddAction = ({text, button, link}: TAddAction) => {
    return (
        <div className={styles.action}>
            <p className='text text_type_main-default text_color_inactive'>{text}</p>
            <Link to={{ pathname: link }}>
                <Button htmlType="button" type="secondary" size="medium">{button}</Button>
            </Link>
        </div>
    )
}


export default AddAction;