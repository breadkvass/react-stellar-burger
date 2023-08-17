import React, { useEffect, useState } from 'react';
import styles from "./burger-ingredients.module.css"
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { Counter  } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropType } from "../../utils/prop-types";
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

function TabGroup() {
    const [current, setCurrent] = useState('1');

    const clickHandler = (value) => {
        setCurrent(value);
    };
    

    return (
      <div className={"pt-5 " + styles.tab}>
        <Tab value="1" active={current === '1'} onClick={clickHandler}>
          Булки
        </Tab>
        <Tab value="2" active={current === '2'} onClick={clickHandler}>
          Соусы
        </Tab>
        <Tab value="3" active={current === '3'} onClick={clickHandler}>
          Начинки
        </Tab>
      </div>
    )
}

function IngredientsPrice(props) {
    return (
        <div className={styles.item__price}>
            <p className={"text text_type_digits-default"}>{props.price}</p>
            <CurrencyIcon />
        </div>
    )
}

IngredientsPrice.propTypes = {
    price: PropTypes.number
}

function IngredientsItem(props) {
    const [isMounted, setMounted] = useState(false);
    
    const clickHandler = () => {
        setMounted(!isMounted);
    }

    return (
        <li className={styles.item} onClick={clickHandler}>
        { props.count > 0 && <Counter count={props.count} size="default" extraClass="m-1" />}
            <img className={"pl-4 pr-4 " + styles.item__img} src={props.data.image} alt={props.data.name} />
            <IngredientsPrice price={props.data.price} />
            <p className={"text text_type_main-default " + styles.name}>{props.data.name}</p>
            {isMounted &&
            <Modal title="Детали ингредиента" padding=" pt-10 pb-15 pl-10 pr-10" clickHandler={clickHandler}>
                <IngredientDetails
                    image={props.data.image_large}
                    name={props.data.name}
                    calories={props.data.calories}
                    proteins={props.data.proteins}
                    fat={props.data.fat}
                    carbohydrates={props.data.carbohydrates}
                />
            </Modal>}
        </li>
    )
}

IngredientsItem.propTypes = {
    count: PropTypes.number,
    data: ingredientPropType
}

function IngredientsSection(props) {
    return (
        <div>
            <h3 className="text text_type_main-medium">
                {props.name}
            </h3>
            <div className={styles.list + " pt-6"}>
                {props.data.map(item => (<IngredientsItem key={item._id} data={item} count={1} />))}
                
            </div>
        </div>
    )
}

IngredientsSection.propTypes = {
    name: PropTypes.string,
    data: PropTypes.arrayOf(ingredientPropType)
} 

const IngredientsContainer = (props) => {
    const buns = props.data.filter((item) => item.type === 'bun');
    const sauces = props.data.filter((item) => item.type === 'sauce').sort((a, b) => b.price - a.price);
    const mains = props.data.filter((item) => item.type === 'main').sort((a, b) => b.price - a.price);
    
    return (
        <div className={"custom-scroll mt-10 " + styles.container}>
            <IngredientsSection name="Булки" data={buns} />
            <IngredientsSection name="Соусы" data={sauces} />
            <IngredientsSection name="Начинка" data={mains} />
        </div>
    )
}

IngredientsContainer.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType)
} 

function BurgerIngredients(props) {
    return (
        <div className={styles.content}>
            <h2 className="pt-10 text text_type_main-large">Соберите бургер</h2>
            <TabGroup />
            <IngredientsContainer data={props.data} />
        </div>
    );
}
  
BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType)
} 

export default BurgerIngredients;