import { useState } from 'react';
import styles from "./burger-constructor.module.css";

import Modal from "../modal/modal";
import OrderDetails from '../order-details/order-details';
import ConstructorContainer from '../constructor-container/constructor-container';

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderItems, setOrderItems] = useState([]);

  const openModal = (e) => {
    e.stopPropagation();
    setIsShowModal(true);
  }

  const closeModal = () => {
    setIsShowModal(false);
  }

  return (
    <div className={styles.content + " mt-25"}>
      <ConstructorContainer setTotalPrice={setTotalPrice} setOrderItems={setOrderItems} />
      <div className={styles.info + " pt-10 pb-10"}>
        <div className={styles.price}>
          <p className="text text_type_digits-medium">{totalPrice}</p>
          <CurrencyIcon />
        </div>
        <Button onClick={openModal} htmlType="button" type="primary" size="large">Оформить заказ</Button>
        {isShowModal &&
        <Modal padding=" pt-10 pb-30 pl-10 pr-10" closeHandler={closeModal}>
          <OrderDetails orderItems={orderItems} />
        </Modal>}
      </div>
    </div>
  )
}

export default BurgerConstructor;