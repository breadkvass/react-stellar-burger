import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../spinner/spinner';
import DoneImage from "../../images/done.png";
import { 
  ORDER_DETAILS_SET_LOADING, 
  ORDER_DETAILS_SET_DATA, 
  ORDER_DETAILS_SET_ERROR 
} from '../../services/actions/order-details';
import styles from "./order-details.module.css";

const url = 'https://norma.nomoreparties.space/api/orders';

function OrderDetails() {
  const dispatch = useDispatch();
  const { bun, filling } = useSelector(state => state.burgerConstructor);

  useEffect(() => {
    dispatch({ type: ORDER_DETAILS_SET_LOADING });
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ingredients: [bun, ...filling, bun],
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(data => dispatch({ type: ORDER_DETAILS_SET_DATA, orderDetails: data }))
      .catch(err => {
        dispatch({ type: ORDER_DETAILS_SET_ERROR });
        console.log(err);
      });
  }, []);

  const { orderDetails, isLoading } = useSelector(state => state.orderDetails);

  return (
    isLoading ?
      <>
        <p className="text text_type_main-medium pt-8">отправляем заказ</p>
        <Spinner />

      </> :
      <>
        <p className={styles.order + " text text_type_digits-large"}>{orderDetails?.order?.number || ''}</p>
        <p className="text text_type_main-medium pt-8">идентификатор заказа</p>
        <img className={styles.done + " pt-15 pb-15"} src={DoneImage} alt="заказ оформлен" />
        <p className="text text_type_main-default pb-2">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
      </>
  )
}

export default OrderDetails;