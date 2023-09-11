import { useState, useContext } from 'react';
import { ingredientPropType } from "../../utils/prop-types";
import { Counter  } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ingredients-item.module.css';
import PropTypes from 'prop-types';
import IngredientsPrice from '../ingredients-price/ingredients-price';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

function IngredientsItem(props) {
    const [isShowModal, setIsShowModal] = useState(false);

    const openModal = (e) => {
        e.stopPropagation();
        setIsShowModal(true);
    }
    
    const closeModal = () => {
        setIsShowModal(false);
    }

    return (
        <li className={styles.item} onClick={openModal}>
        { props.count > 0 && <Counter count={props.count} size="default" extraClass="m-1" />}
            <img className={"pl-4 pr-4 " + styles.item__img} src={props.data.image} alt={props.data.name} />
            <IngredientsPrice price={props.data.price} />
            <p className={"text text_type_main-default " + styles.name}>{props.data.name}</p>
            {isShowModal &&
            <Modal title="Детали ингредиента" padding=" pt-10 pb-15 pl-10 pr-10" closeHandler={closeModal}>
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

export default IngredientsItem;