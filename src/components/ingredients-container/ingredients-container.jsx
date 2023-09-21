import { useSelector } from 'react-redux';
import IngredientsSection from '../ingredients-section/ingredients-section';
import styles from './ingredients-container.module.css';

const IngredientsContainer = () => {
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