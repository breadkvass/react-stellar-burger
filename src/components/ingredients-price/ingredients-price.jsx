import PropTypes from 'prop-types';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import styles from './ingredients-price.module.css';

function IngredientsPrice(props) {
    return (
        <div className={styles.item__price}>
            <p className={"text text_type_digits-default"}>{props.price}</p>
            <CurrencyIcon />
        </div>
    )
}

IngredientsPrice.propTypes = {
    price: PropTypes.number
}

export default IngredientsPrice;