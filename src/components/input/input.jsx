import styles from './input.module.css';
import { ShowIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Input(props) {
    let type = props.type;
    return(
        <>
            <label htmlFor={props.name}></label>
            <input className={styles.input + ' text text_type_main-default text_color_inactive'} type={props.type} id={props.name} name={props.name} placeholder={props.name} required />
            {type === 'password' && <ShowIcon type="primary" />}
        </>
    )
}

export default Input;