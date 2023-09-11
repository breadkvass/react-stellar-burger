import { useState, useContext } from 'react';
import { ingredientPropType } from "../../utils/prop-types";
import styles from './ingredients-container.module.css';
import IngredientsSection from '../ingredients-section/ingredients-section';
import PropTypes from 'prop-types';
import { IngredientsContext } from '../../services/ingredients-context';

const IngredientsContainer = () => {
    const {data, isLoading} = useContext(IngredientsContext);
    const buns = !isLoading && data.filter((item) => item.type === 'bun');
    const sauces = !isLoading && data.filter((item) => item.type === 'sauce').sort((a, b) => b.price - a.price);
    const mains = !isLoading && data.filter((item) => item.type === 'main').sort((a, b) => b.price - a.price);

    return (
        <div className={"custom-scroll mt-10 " + styles.container}>
        { !isLoading && <> 
            <IngredientsSection name="Булки" data={buns} /> 
            <IngredientsSection name="Соусы" data={sauces} /> 
            <IngredientsSection name="Начинка" data={mains} /> 
        </> } 
        </div>
    )
}

IngredientsContainer.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType)
} 

export default IngredientsContainer;