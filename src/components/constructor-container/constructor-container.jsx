import React, { useState, useContext, useEffect, useReducer } from 'react';
import styles from './constructor-container.module.css';
import PropTypes from 'prop-types';
import { IngredientsContext } from '../../services/ingredients-context';
import BurgerComponent from '../burger-component/burger-component';
import { ingredientPropType } from "../../utils/prop-types";

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
  
function ConstructorContainer({setOrderItems, setTotalPrice}) {
    const {data, isLoading} = useContext(IngredientsContext);
    const [top, setTop] = useState(findIngredientById(data, defaultBun));
    const [fillings, setFilling] = useState(defaultFilling.map(id => findIngredientById(data, id)));
    const [bottom, setBottom] = useState(findIngredientById(data, defaultBun));  
  
    useEffect(() => {
        const totalPrice = [top, ...fillings, bottom].reduce((acc, item) => acc + item.price, 0);
        const orderItems = [top, ...fillings, bottom].map(item => item._id);
        
        setOrderItems(orderItems);
        setTotalPrice(totalPrice);
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

export default ConstructorContainer;