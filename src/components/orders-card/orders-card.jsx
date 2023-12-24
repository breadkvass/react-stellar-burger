import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './orders-card.module.css';

function OrdersCard({order}) {
    const location = useLocation();
    const ingredients = useSelector(state => state.ingredients.ingredients);
    const getIngredientsById = (ingredients, id) => {
        return ingredients.find(ingredient => ingredient._id === id);
    };
    const orderIngredients = order.ingredients.map(item => getIngredientsById(ingredients, item));
    const orderPrice = orderIngredients.map(item => item.price).reduce((a, b) => a + b);

    return (
        <Link
            to={`/feed/${order.number}`}
            state={{ background: location }} 
            className={styles.order}
        >
            <div className={styles.info}>
                <p className='text text_type_digits-default'>{'#' + order.number}</p>
                <FormattedDate date={new Date(order.createdAt)} className='text text_type_main-default text_color_inactive'/>
            </div>
            <p className='text text_type_main-medium'>{order.name}</p>
            <div className={styles.info}>
                <ul className={styles.ingredients}>
                    {orderIngredients.map((item, index) => {
                        if (index <= 4) {
                            return (
                                <li className={styles.ingredient} key={uuid()} style={{ zIndex: 6 - index, backgroundImage: `url(${item.image})` }}></li>
                            )
                        }
                    })}
                    {orderIngredients.length > 6 &&
                        <li className={styles.ingredient} key={uuid()} style={{zIndex: 1, backgroundImage: `url(${orderIngredients[5].image_mobile})`}}>
                            <p className={styles.counter + ' text text_type_main-default'}>{'+' + (orderIngredients.length - 5)}</p>
                        </li>
                    }
                </ul>
                <div className={styles.price}>
                    <p className="text text_type_digits-default">{orderPrice}</p>
                    <CurrencyIcon />
                </div>
            </div>
        </Link>
        
    )
}

export default OrdersCard;