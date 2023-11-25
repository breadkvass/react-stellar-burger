import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../spinner/spinner';
import DoneImage from "../../images/done.png";
import { postOrder } from '../../utils/api';
import styles from "./order-details.module.css";

function OrderDetails() {
  const dispatch = useDispatch();
  const { bun, filling } = useSelector(state => state.burgerConstructor);

  useEffect(() => {
    dispatch(postOrder([bun, ...(filling.map(f => f.id)), bun]));
  }, []);

  const { isLoading, orderDetails } = useSelector(state => state.orderDetails);

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