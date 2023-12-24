import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorContainer from '../constructor-container/constructor-container';
import Modal from "../modal/modal";
import OrderDetails from '../order-details/order-details';
import { postOrder } from '../../utils/api';
import styles from "./burger-constructor.module.css";

function BurgerConstructor() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const { bun, filling } = useSelector(state => state.burgerConstructor);
  const { ingredients, isLoading } = useSelector(state => state.ingredients);
  const accessToken = localStorage.getItem('accessToken');
  const isAuth = useSelector(state => state.auth.isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      const orderItems = [bun, ...(filling.map(f => f.id)), bun];
      const totalPrice = orderItems.map(id => ingredients.find((item) => item._id === id)).reduce((acc, item) => acc + item.price, 0);
      setTotalPrice(totalPrice);
    }
  }, [isLoading, ingredients, bun, filling])

  const openModal = (e) => {
    e.stopPropagation();
    dispatch(postOrder([bun, ...(filling.map(f => f.id)), bun], accessToken));
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
        <Button onClick={openModal} disabled={!isAuth ? true : false} htmlType="button" type="primary" size="large">Оформить заказ</Button>
      </div>
    </div>
  )
}

export default BurgerConstructor;