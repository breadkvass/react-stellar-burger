import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Counter  } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import IngredientsPrice from '../ingredients-price/ingredients-price';
import PropTypes from 'prop-types';
import { ingredientPropType } from "../../utils/prop-types";
import { INGREDIENT_DETAILS_SET, INGREDIENT_DETAILS_RESET } from '../../services/actions/ingredient-details';
import styles from './ingredients-item.module.css';

function IngredientsItem({count = 0, ingredient}) {
    const dispatch = useDispatch();
    const [isShowModal, setIsShowModal] = useState(false);

    const openModal = (e) => {
        dispatch({type: INGREDIENT_DETAILS_SET, details: ingredient});
        e.stopPropagation();
        setIsShowModal(true);
    }
    
    const closeModal = () => {
        dispatch({type: INGREDIENT_DETAILS_RESET});
        setIsShowModal(false);
    }

    return (
        <li className={styles.item} onClick={openModal}>
        { count > 0 && <Counter count={count} size="default" extraClass="m-1" />}
            <img className={"pl-4 pr-4 " + styles.item__img} src={ingredient.image} alt={ingredient.name} />
            <IngredientsPrice price={ingredient.price} />
            <p className={"text text_type_main-default " + styles.name}>{ingredient.name}</p>
            {isShowModal &&
            <Modal title="Детали ингредиента" padding=" pt-10 pb-15 pl-10 pr-10" closeHandler={closeModal}>
                <IngredientDetails/>
            </Modal>}
        </li>
    )
}

IngredientsItem.propTypes = {
    count: PropTypes.number,
    ingredient: ingredientPropType.isRequired
}

export default IngredientsItem;