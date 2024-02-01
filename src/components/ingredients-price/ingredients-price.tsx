import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import styles from './ingredients-price.module.css';

type TPrice = {
    price: number;
}

function IngredientsPrice({price}: TPrice) {
    return (
        <div className={styles.item__price}>
            <p className={"text text_type_digits-default"}>{price}</p>
            <CurrencyIcon type='primary' />
        </div>
    )
}

export default IngredientsPrice;