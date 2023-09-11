import styles from './ingredient-value.module.css';
import PropTypes from 'prop-types';

function IngredientValue(props) {
    return (
        <div className={styles.value}>
            <p className="text text_type_main-default text_color_inactive">{props.name}</p>
            <p className="text text_type_digits-default text_color_inactive">{props.value}</p>
        </div>
    )
}

IngredientValue.propTypes = {
    name: PropTypes.string,
    value: PropTypes.number
}

export default IngredientValue;