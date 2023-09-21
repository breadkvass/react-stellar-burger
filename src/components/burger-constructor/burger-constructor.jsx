import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorContainer from '../constructor-container/constructor-container';
import Modal from "../modal/modal";
import OrderDetails from '../order-details/order-details';
import styles from "./burger-constructor.module.css";

function BurgerConstructor() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const { bun, filling } = useSelector(state => state.burgerConstructor);
  const { ingredients, isLoading } = useSelector(state => state.ingredients);

  useEffect(() => {
    if (!isLoading) {
      const orderItems = [bun, ...filling, bun];
      const totalPrice = orderItems.map(id => ingredients.find((item) => item._id === id)).reduce((acc, item) => acc + item.price, 0);
      setTotalPrice(totalPrice);
    }
  }, [isLoading, ingredients, bun, filling])

  const openModal = (e) => {
    e.stopPropagation();
    setIsShowModal(true);
  }

  const closeModal = () => {
    setIsShowModal(false);
  }

  return (
    <div className={styles.content + " mt-25"}>
      <ConstructorContainer />
      <div className={styles.info + " pt-10 pb-10"}>
        <div className={styles.price}>
          <p className="text text_type_digits-medium">{totalPrice}</p>
          <CurrencyIcon />
        </div>
        <Button onClick={openModal} htmlType="button" type="primary" size="large">Оформить заказ</Button>
        {isShowModal &&
          <Modal padding=" pt-10 pb-30 pl-10 pr-10" closeHandler={closeModal}>
            <OrderDetails />
          </Modal>}
      </div>
    </div>
  )
}

export default BurgerConstructor;