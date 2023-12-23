import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-info.module.css';
import { useEffect } from 'react';

function OrderInfo({order, style}) {
    const ingredients = useSelector(state => state.ingredients.ingredients);
    const getIngredientsById = (ingredients, id) => {
        return ingredients.find(ingredient => ingredient._id === id);
    };
    const orderIngredients = order.ingredients.map(item => getIngredientsById(ingredients, item));
    const orderIngredientsUnique = Array.from(new Set(orderIngredients.map(item => item._id))).map(item => getIngredientsById(ingredients, item));
    const orderPrice = orderIngredients.map(item => item.price).reduce((a, b) => a + b);
    console.log(orderPrice);

    const ingredientCounter = (id) => {
        let count = 0;
        for (let i = 0; i < order.ingredients.length; i++ ) {
            if (order.ingredients[i] === id) {
                count += 1;
            }
        }
        return count;
    }

    let status = 'Готово';

    return (
        <div className={styles.content}>
            <p className={styles.number + ' text text_type_digits-default'}>{'#'+ order.number}</p>
            <p className={'text text_type_main-medium'}>{order.name}</p>
            <p className={styles.status + ' text text_type_main-default'}>{status}</p>
            <p className={styles.list + ' text text_type_main-medium'}>Состав:</p>
            <ul className={styles.ingredients + ' custom-scroll'}>
                {orderIngredientsUnique.map(item => (
                    <li className={styles.ingredient} key={uuid()}>
                        <img className={styles.img} src={item.image} alt={item.name} />
                        <p className={styles.ingredient_name + ' text text_type_main-default'}>{item.name}</p>
                        <div className={styles.price}>
                            <p className='text text_type_digits-default'>{`${ingredientCounter(item._id)} x ${item.price}`}</p>
                            <CurrencyIcon />
                        </div>
                    </li>
                ))}
                
            </ul>
            <div className={styles.info}>
                <FormattedDate date={new Date(order.createdAt)} className='text text_type_main-default text_color_inactive'/>
                <div className={styles.price}>
                    <p className='text text_type_digits-default'>{orderPrice}</p>
                    <CurrencyIcon />
                </div>
            </div>
        </div>
        
    )
}

// OrderInfo.propTypes = {ingredientPropType};

export default OrderInfo;