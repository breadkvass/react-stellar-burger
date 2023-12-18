import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './orders-card.module.css';

function OrdersCard({number, date, name, img1, img2, img3, price}) {

    return (
        <div className={styles.order}>
            <div className={styles.info}>
                <p className='text text_type_digits-default'>{number}</p>
                <p className='text text text_type_main-small text_color_inactive'>{date}</p>
            </div>
            <p className='text text_type_main-medium'>{name}</p>
            <div className={styles.info}>
                <ul className={styles.ingredients}>
                    <li className={styles.ingredient} key={1} style={{zIndex: 6 - 1, listStyle: "none"}}><img className={styles.img} src={img1} alt='ингредиент'/></li>
                    <li className={styles.ingredient} key={2} style={{zIndex: 6 - 2, listStyle: "none"}}><img className={styles.img} src={img2} alt='ингредиент'/></li>
                    <li className={styles.ingredient} key={3} style={{zIndex: 6 - 3, listStyle: "none"}}><img className={styles.img} src={img3} alt='ингредиент'/></li>
                </ul>
                <div className={styles.price}>
                    <p className="text text_type_digits-default">{price}</p>
                    <CurrencyIcon />
                </div>
            </div>
        </div>
    )
}

export default OrdersCard;