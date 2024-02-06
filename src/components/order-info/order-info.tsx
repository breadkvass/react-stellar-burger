import { useSelector } from '../../hooks/hooks';
import { v4 as uuid } from 'uuid';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { TIngredient } from '../../slices/ingredients';
import { isNonNil } from '../../utils/utils';
import styles from './order-info.module.css';

type TOrder = {
    createdAt: string;
    ingredients: string[];
    name: string;
    number: number;
    owner: object;
    price: number;
    status: string;
    updatedAt: string;
    _id: string;
}

type TOrderInfo = {
    order: TOrder;
}

function OrderInfo({order}: TOrderInfo) {
    const ingredients = useSelector(state => state.ingredients.ingredients);
    const getIngredientsById = (ingredients: TIngredient[], id: string) => {
        return ingredients.find(ingredient => ingredient._id === id);
    };
    const orderIngredients = order.ingredients.map(item => getIngredientsById(ingredients, item)).filter(isNonNil);
    const orderIngredientsUnique = Array.from(new Set(orderIngredients.map(item => item._id))).map(item => getIngredientsById(ingredients, item)).filter(isNonNil);
    const orderPrice = orderIngredients.map(item => item.price).reduce((a, b) => a + b);

    const ingredientCounter = (id: string) => {
        let count = 0;
        for (let i = 0; i < order.ingredients.length; i++ ) {
            if (order.ingredients[i] === id) {
                count += 1;
            }
        }
        return count;
    }

    let status: string = '';
    let color: string = '';

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
        <div className={styles.content}>
            <p className={styles.number + ' text text_type_digits-default'}>{'#'+ order.number}</p>
            <p className={'text text_type_main-medium'}>{order.name}</p>
            <p className={styles.status + ' text text_type_main-default'} style={{ color }} >{status}</p>
            <p className={styles.list + ' text text_type_main-medium'}>Состав:</p>
            <ul className={styles.ingredients + ' custom-scroll'}>
                {orderIngredientsUnique.map(item => (
                    <li className={styles.ingredient} key={uuid()}>
                        <img className={styles.img} src={item.image} alt={item.name} />
                        <p className={styles.ingredient_name + ' text text_type_main-default'}>{item.name}</p>
                        <div className={styles.price}>
                            <p className='text text_type_digits-default'>{`${ingredientCounter(item._id)} x ${item.price}`}</p>
                            <CurrencyIcon type={'primary'} />
                        </div>
                    </li>
                ))}
                
            </ul>
            <div className={styles.info}>
                <FormattedDate date={new Date(order.createdAt)} className='text text_type_main-default text_color_inactive'/>
                <div className={styles.price}>
                    <p className='text text_type_digits-default'>{orderPrice}</p>
                    <CurrencyIcon type={'primary'} />
                </div>
            </div>
        </div>
        
    )
}

export default OrderInfo;