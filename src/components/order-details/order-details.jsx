import styles from "./order-details.module.css";
import DoneImage from "../../images/done.png";

function OrderDetails() {
    return (
        <>
            <p className={styles.order + " text text_type_digits-large"}>034536</p>
            <p className="text text_type_main-medium pt-8">идентификатор заказа</p>
            <img className={styles.done + " pt-15 pb-15"} src={DoneImage}  alt="заказ оформлен"/>
            <p className="text text_type_main-default pb-2">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </>
    )
    
}


export default OrderDetails;