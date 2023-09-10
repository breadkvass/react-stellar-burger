import React, { useState, useEffect } from 'react';
import styles from "./order-details.module.css";
import DoneImage from "../../images/done.png";
import Spinner from '../spinner/spinner';

const url = 'https://norma.nomoreparties.space/api/orders';

function OrderDetails(props) {
    const [state, setState] = useState({
        isLoading: true,
        hasError: false,
        data: {}
    });

    useEffect(() => {
        console.log(props.orderItems)
        fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ingredients: props.orderItems,
          })
        })
          .then(res => {
            if (res.ok) {
              return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
          .then(data => setState({
            isLoading: false,
            hasError: false,
            data: data
          }))
          .catch(err => {
            setState({
              isLoading: false,
              hasError: true,
              data: {}
            });
            console.log(err);
          });
      }, []);
      
      const { data, isLoading, hasError } = state;

    return (
        isLoading ? 
        <>
            <p className="text text_type_main-medium pt-8">отправляем заказ</p>
            <Spinner />

        </> :       
        <>
            <p className={styles.order + " text text_type_digits-large"}>{data?.order?.number || ''}</p>
            <p className="text text_type_main-medium pt-8">идентификатор заказа</p>
            <img className={styles.done + " pt-15 pb-15"} src={DoneImage}  alt="заказ оформлен"/>
            <p className="text text_type_main-default pb-2">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </>
    )
    
}


export default OrderDetails;