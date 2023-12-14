import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from "react-dnd";
import { Counter  } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import IngredientsPrice from '../ingredients-price/ingredients-price';
import PropTypes from 'prop-types';
import { ingredientPropType } from "../../utils/prop-types";
import { setDetails, resetDetails } from '../../slices/ingredientDetails';
import styles from './ingredients-item.module.css';
import { Link, useLocation } from 'react-router-dom';

function IngredientsItem({ingredient}) {
    const location = useLocation();
    const {bun, filling} = useSelector(state => state.burgerConstructor);
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const [isShowModal, setIsShowModal] = useState(false);
    const [, dragRef] = useDrag({type: 'ingredient', item: ingredient});


    useEffect(()=> {
        setCount([bun, ...(filling.map(f => f.id)), bun].filter(id => id === ingredient._id).length);
    }, [bun, filling])

    // const openModal = (e) => {
    //     e.stopPropagation();
    //     dispatch(setDetails(ingredient));
    //     setIsShowModal(true);
    // }
    
    // const closeModal = () => {
    //     dispatch(resetDetails());
    //     setIsShowModal(false);
    // }

    return (
        <Link
            to={`/ingredients/${ingredient._id}`}
            state={{ background: location }} 
            className={styles.item} 
            // ref={dragRef}
        >
            { count > 0 && <Counter count={count} size="default" extraClass="m-1" />}
            <img className={"pl-4 pr-4 " + styles.item__img} src={ingredient.image} alt={ingredient.name} ref={dragRef}/>
            <IngredientsPrice price={ingredient.price} />
            <p className={"text text_type_main-default " + styles.name}>{ingredient.name}</p>
        </Link>
        
    )
}

IngredientsItem.propTypes = {
    count: PropTypes.number,
    ingredient: ingredientPropType.isRequired
}

export default IngredientsItem;