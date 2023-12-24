import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { orderPropType } from '../../utils/prop-types';
import { v4 as uuid } from 'uuid';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './profle-orders-card.module.css';

function ProfileOrderCard({order}) {
    const location = useLocation();
    const ingredients = useSelector(state => state.ingredients.ingredients);
    const getIngredientsById = (ingredients, id) => {
        return ingredients.find(ingredient => ingredient._id === id);
    };
    const orderIngredients = order.ingredients.map(item => getIngredientsById(ingredients, item));
    const orderPrice = orderIngredients.map(item => item.price).reduce((a, b) => a + b);

    let status = null;
    let color = null;

    if (order.status === 'done') {
        status = 'Выполнен';
        color = '#00CCCC';
    } else if (order.status === 'pending') {
        status = 'Готовится';
        color = 'white';
    } else if (order.status === 'created') {
        status = 'Создан';
        color = 'white';
    }

    return (
        <Link
            to={`/profile/orders/${order.number}`}
            state={{ background: location }} 
            className={styles.order}
        >
            <div className={styles.info}>
                <p className='text text_type_digits-default'>{'#' + order.number}</p>
                <FormattedDate date={new Date(order.createdAt)} className='text text_type_main-default text_color_inactive'/>
            </div>
            <p className='text text_type_main-medium'>{order.name}</p>
            <p className={styles.process + ' text text_type_main-default'} style={{ color }}>{status}</p>
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

ProfileOrderCard.propTypes = {
    order: orderPropType.isRequired
}

export default ProfileOrderCard;