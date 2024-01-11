import { ingredientPropType } from '../../utils/prop-types';
import IngredientValue from '../ingredient-value/ingredient-value';
import styles from "./ingredient-details.module.css";

function IngredientDetails({image, name, calories, proteins, fat, carbohydrates}) {
    return (
        <>
            <img className={styles.image} src={image} alt={name}/>
            <p className={"text text_type_main-medium pt-4 " + styles.name}>{name}</p>
            <div className={styles.nutrition + " pt-8"}>
                <IngredientValue name="Калории, ккал" value={calories} />
                <IngredientValue name="Белки, г" value={proteins} />
                <IngredientValue name="Жиры, г" value={fat} />
                <IngredientValue name="Углеводы, г" value={carbohydrates} />
            </div>
        </>
    )
}

IngredientDetails.propTypes = {ingredientPropType};

export default IngredientDetails;