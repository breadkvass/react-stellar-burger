import React, { useState, useContext, useEffect } from 'react';
import styles from "./burger-constructor.module.css"
import PropTypes from 'prop-types';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropType } from "../../utils/prop-types";
import Modal from "../modal/modal";
import OrderDetails from '../order-details/order-details';
import { IngredientsContext } from '../../services/ingredients-context';

function BurgerComponent(props) {
    let place = '';
    if (props.type === 'top') {
        place = ' (верх)';
    } else if (props.type === 'bottom') {
        place = ' (низ)';
    } else {
        place = '';
    }
    return (
    <div className={props.className}>
        {!props.type && <DragIcon type="primary" />}
        <ConstructorElement type={props.type} isLocked={props.isLocked} text={props.data.name + place} price={props.data.price} thumbnail={props.data.image} />
    </div>
    )
}

BurgerComponent.propTypes = {
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  data: ingredientPropType
} 

function findIngredientById(data, id) {
  return data.find((item) => item._id === id);
}

const defaultFilling = [
    '643d69a5c3f7b9001cfa0944',
    '643d69a5c3f7b9001cfa093f',
    '643d69a5c3f7b9001cfa0947',
    '643d69a5c3f7b9001cfa0946',
    '643d69a5c3f7b9001cfa0946'
]

const defaultBun = '643d69a5c3f7b9001cfa093c';

function ConstructorContainer(props) {
  const {data, isLoading} = useContext(IngredientsContext);
  const [top, setTop] = useState(findIngredientById(data, defaultBun));
  const [fillings, setFilling] = useState(defaultFilling.map(id => findIngredientById(data, id)));
  const [bottom, setBottom] = useState(findIngredientById(data, defaultBun));  

  useEffect(() => {
    const totalPrice = [top, ...fillings, bottom].reduce((acc, item) => acc + item.price, 0);

    props.setTotalPrice(totalPrice);
  }, [top, fillings, bottom])

  return (!isLoading && 
    <div className={styles.сonstructor__сontainer}>
      <BurgerComponent type="top" isLocked={true} className="pl-8" data={top}/>
      <div className={"custom-scroll " + styles.unlocked}>
        {fillings.map((item, i) => (<BurgerComponent key={i} isLocked={false} className={styles.component} data={item}/>))}
      </div>
      <BurgerComponent type="bottom" isLocked={true} className="pl-8" data={bottom} />
    </div>
  )
}



ConstructorContainer.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType)
}

function BurgerConstructor() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const openModal = (e) => {
    e.stopPropagation();
    setIsShowModal(true);
  }

  const closeModal = () => {
    setIsShowModal(false);
  }

  return (
    <div className={styles.content + " mt-25"}>
      <ConstructorContainer setTotalPrice={setTotalPrice} />
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


BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType)
} 

export default BurgerConstructor;