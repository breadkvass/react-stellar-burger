import { useState, useContext, useEffect } from 'react';
import styles from './constructor-container.module.css';

import BurgerComponent from '../burger-component/burger-component';

import { useSelector } from 'react-redux';
import { IngredientsContext } from '../../services/ingredients-context';

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
    // const {data, isLoading} = useContext(IngredientsContext);
    
    const { ingredients, isLoading, hasError } = useSelector(state => state.ingredients);

    const [top, setTop] = useState(findIngredientById(ingredients, defaultBun));
    const [fillings, setFilling] = useState(defaultFilling.map(id => findIngredientById(ingredients, id)));
    const [bottom, setBottom] = useState(findIngredientById(ingredients, defaultBun));  
  
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

export default ConstructorContainer;