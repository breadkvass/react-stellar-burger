import { useSelector } from 'react-redux';
import IngredientValue from '../ingredient-value/ingredient-value';
import styles from "./ingredient-details.module.css";

function IngredientDetails() {
    const details = useSelector(state => state.ingredientDetails);
    return (
        <>
            <img className={styles.image} src={details.image}  alt={details.name}/>
            <p className={"text text_type_main-medium pt-4 " + styles.name}>{details.name}</p>
            <div className={styles.nutrition + " pt-8"}>
                <IngredientValue name="Калории, ккал" value={details.calories} />
                <IngredientValue name="Белки, г" value={details.proteins} />
                <IngredientValue name="Жиры, г" value={details.fat} />
                <IngredientValue name="Углеводы, г" value={details.carbohydrates} />
            </div>
        </>
    )
    
}

export default IngredientDetails;