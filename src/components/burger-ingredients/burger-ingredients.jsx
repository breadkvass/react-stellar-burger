import PropTypes from 'prop-types';
import { ingredientPropType } from "../../utils/prop-types";
import TabGroup from '../tab-group/tab-group';
import IngredientsContainer from '../ingredients-container/ingredients-container';
import styles from "./burger-ingredients.module.css";

function BurgerIngredients() {
    
    return (
        <div className={styles.content}>
            <h2 className="pt-10 text text_type_main-large">Соберите бургер</h2>
            <TabGroup />
            <IngredientsContainer />
        </div>
    );
}
  
BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType)
} 

export default BurgerIngredients;