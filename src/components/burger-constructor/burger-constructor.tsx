import { useState, useEffect, SyntheticEvent } from 'react';
import { useSelector, useDispatch } from '../../hooks/hooks';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorContainer from '../constructor-container/constructor-container';
import Modal from "../modal/modal";
import OrderDetails from '../order-details/order-details';
import { postOrder } from '../../utils/api';
import styles from "./burger-constructor.module.css";

function BurgerConstructor() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const bun = useSelector(state => state.burgerConstructor.bun);
  const filling = useSelector(state => state.burgerConstructor.filling);
  const isAuth = useSelector(state => state.auth.isAuth);
  const { ingredients, isLoading } = useSelector(state => state.ingredients);
  const accessToken = localStorage.getItem('accessToken');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      const orderItems = [bun, ...(filling.map(f => f.id)), bun];
      const totalPrice = orderItems.map(id => ingredients.find(item => item._id === id)).reduce((acc, item) => item ? acc + item.price : acc, 0);
      setTotalPrice(totalPrice);
    }
  }, [isLoading, ingredients, bun, filling])

  const openModal = (e: SyntheticEvent<Element, Event>) => {
    e.stopPropagation();
    if (accessToken != null) {
      dispatch(postOrder([bun, ...(filling.map(f => f.id)), bun], accessToken));
      setIsShowModal(true)
    } else {
      console.log('Ошибка токена')
    }
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
          <CurrencyIcon type="primary"/>
        </div>
        <Button onClick={openModal} disabled={!isAuth ? true : false} htmlType="button" type="primary" size="large">Оформить заказ</Button>
      </div>
      { isShowModal &&
      
      <Modal closeHandler={closeModal} padding={' pt-10 pb-15 pl-10 pr-10'}>
        <OrderDetails />
      </Modal>}
    </div>
  )
}

export default BurgerConstructor;