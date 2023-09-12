import PropTypes from 'prop-types';
import styles from "./ingredient-details.module.css";
import IngredientValue from '../ingredient-value/ingredient-value';

function IngredientDetails(props) {
    return (
        <>
            <img className={styles.image} src={props.image}  alt={props.name}/>
            <p className={"text text_type_main-medium pt-4 " + styles.name}>{props.name}</p>
            <div className={styles.nutrition + " pt-8"}>
                <IngredientValue name="Калории, ккал" value={props.calories} />
                <IngredientValue name="Белки, г" value={props.proteins} />
                <IngredientValue name="Жиры, г" value={props.fat} />
                <IngredientValue name="Углеводы, г" value={props.carbohydrates} />
            </div>
        </>
    )
    
}

IngredientDetails.propTypes = {
    name: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    image: PropTypes.string,
}


export default IngredientDetails;