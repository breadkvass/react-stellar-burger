import PropTypes from 'prop-types';
import styles from "./ingredient-details.module.css";

function Value(props) {
    return (
        <div className={styles.value}>
            <p className="text text_type_main-default text_color_inactive">{props.name}</p>
            <p className="text text_type_digits-default text_color_inactive">{props.value}</p>
        </div>
    )
}

Value.propTypes = {
    name: PropTypes.string,
    value: PropTypes.number
}

function IngredientDetails(props) {
    return (
        <>
            <img className={styles.image} src={props.image}  alt={props.name}/>
            <p className="text text_type_main-medium pt-4" >{props.name}</p>
            <div className={styles.nutrition + " pt-8"}>
                <Value name="Калории, ккал" value={props.calories} />
                <Value name="Белки, г" value={props.proteins} />
                <Value name="Жиры, г" value={props.fat} />
                <Value name="Углеводы, г" value={props.carbohydrates} />
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