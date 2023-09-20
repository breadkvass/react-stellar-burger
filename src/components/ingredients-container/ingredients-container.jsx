import { useContext } from 'react';
import styles from './ingredients-container.module.css';

import IngredientsSection from '../ingredients-section/ingredients-section';

import { useSelector } from 'react-redux';
import { IngredientsContext } from '../../services/ingredients-context';

const IngredientsContainer = () => {
    // const {data, isLoading} = useContext(IngredientsContext);
    const { ingredients, isLoading, hasError } = useSelector(state => state.ingredients);
    const buns = !isLoading && ingredients.filter((item) => item.type === 'bun');
    const sauces = !isLoading && ingredients.filter((item) => item.type === 'sauce').sort((a, b) => b.price - a.price);
    const mains = !isLoading && ingredients.filter((item) => item.type === 'main').sort((a, b) => b.price - a.price);

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

export default IngredientsContainer;