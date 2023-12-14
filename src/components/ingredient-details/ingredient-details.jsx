import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import IngredientValue from '../ingredient-value/ingredient-value';
import styles from "./ingredient-details.module.css";
import MainLayout from '../main-layout/main-layout';

function IngredientDetails({image, name, calories, proteins, fat, carbohydrates}) {
    
    return (
        <>
            <img className={styles.image} src={image}  alt={name}/>
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

export default IngredientDetails;