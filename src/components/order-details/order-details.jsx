import { useSelector } from '../../hooks/hooks';
import Spinner from '../spinner/spinner';
import DoneImage from "../../images/done.png";
import styles from "./order-details.module.css";

function OrderDetails() {
  const { isLoading, orderDetails } = useSelector(state => state.orderDetails);
  console.log(orderDetails);
  console.log(orderDetails.order);

  return (<>{
    isLoading ?
      <>
        <p className="text text_type_main-medium pt-8">отправляем заказ</p>
        <Spinner />
      </> :
      <>
        <p className={styles.order + " text text_type_digits-large"}>{orderDetails?.order.number || ''}</p>
        <p className="text text_type_main-medium pt-8">идентификатор заказа</p>
        <img className={styles.done + " pt-15 pb-15"} src={DoneImage} alt="заказ оформлен" />
        <p className="text text_type_main-default pb-2">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
      </>
   }</>)
}

export default OrderDetails;