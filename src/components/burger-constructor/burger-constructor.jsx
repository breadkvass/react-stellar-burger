import React, { useState, useContext } from 'react';
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

const defaultFeeling = [
    '643d69a5c3f7b9001cfa0944',
    '643d69a5c3f7b9001cfa093f',
    '643d69a5c3f7b9001cfa0947',
    '643d69a5c3f7b9001cfa0946',
    '643d69a5c3f7b9001cfa0946'
]

const defaultBun = '643d69a5c3f7b9001cfa093c';

function ConstructorContainer() {
  const {data, isLoading} = useContext(IngredientsContext);
  const [topId, setTop] = useState(defaultBun);
  const [fillingIds, setFilling] = useState(defaultFeeling);
  const [bottomId, setBottom] = useState(defaultBun);

  const top = findIngredientById(data, topId);
  const bottom = findIngredientById(data, bottomId);
  const middle = fillingIds.map(id => findIngredientById(data, id));

  return (!isLoading && 
    <div className={styles.сonstructor__сontainer}>
      <BurgerComponent type="top" isLocked={true} className="pl-8" data={top}/>
      <div className={"custom-scroll " + styles.unlocked}>
        {middle.map((item, i) => (<BurgerComponent key={i} isLocked={false} className={styles.component} data={item}/>))}
      </div>
      <BurgerComponent type="bottom" isLocked={true} className="pl-8" data={bottom} />
    </div>
  )
}


ConstructorContainer.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType)
}

const initialState = { price: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}



function BurgerConstructor() {
  const [isShowModal, setIsShowModal] = useState(false);

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
          <p className="text text_type_digits-medium">610</p>
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