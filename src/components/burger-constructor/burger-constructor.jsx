import React, { useState } from 'react';
import styles from "./burger-constructor.module.css"
import PropTypes from 'prop-types';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropType } from "../../utils/prop-types";
import Modal from "../modal/modal";
import OrderDetails from '../order-details/order-details';


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
        <ConstructorElement type={props.type} isLocked={props.islocked} text={props.data.name + place} price={props.data.price} thumbnail={props.data.image} />
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

class ConstructorContainer extends React.Component {
  state = {
    top: '60666c42cc7b410027a1a9b1',
    middle: [
      '60666c42cc7b410027a1a9b9',
      '60666c42cc7b410027a1a9b4',
      '60666c42cc7b410027a1a9bc',
      '60666c42cc7b410027a1a9bb',
      '60666c42cc7b410027a1a9bb'
    ],
    bottom: '60666c42cc7b410027a1a9b1'
  }

  render() {
    const top = findIngredientById(this.props.data, this.state.top);
    const bottom = findIngredientById(this.props.data, this.state.bottom);
    const middle = this.state.middle.map(id => findIngredientById(this.props.data, id));

    return (
      <div className={styles.сonstructor__сontainer}>
        <BurgerComponent type="top" isLocked={true} className="pl-8" data={top}/>
        <div className={"custom-scroll " + styles.unlocked}>
          {middle.map((item, i) => (<BurgerComponent key={i} isLocked={false} className={styles.component} data={item}/>))}
        </div>
        <BurgerComponent type="bottom" isLocked={true} className="pl-8" data={bottom} />
      </div>
    )
  }
}

function BurgerConstructor(props) {
  const [isMounted, setMounted] = useState(false);

  const clickHandler = () => {
    setMounted(!isMounted);
  }

  return (
    <div className={styles.content + " mt-25"}>
      <ConstructorContainer data={props.data} />
      <div className={styles.info + " mt-10"}>
        <div className={styles.price}>
          <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon />
        </div>
        <Button onClick={clickHandler} htmlType="button" type="primary" size="large">Оформить заказ</Button>
        {isMounted &&
        <Modal padding=" pt-10 pb-30 pl-10 pr-10" clickHandler={clickHandler}>
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