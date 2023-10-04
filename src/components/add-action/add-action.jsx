import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './add-action.module.css'

function AddAction({text, button}) {
    return (
        <div className={styles.action}>
            <p className='text text_type_main-default text_color_inactive'>{text}</p>
            <Button htmlType="button" type="secondary" size="medium" padding="none" >{button}</Button>
        </div>
    )
}

export default AddAction;