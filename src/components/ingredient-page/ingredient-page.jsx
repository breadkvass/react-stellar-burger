import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import MainLayout from '../main-layout/main-layout';
import IngredientDetails from '../ingredient-details/ingredient-details';
import styles from "./ingredient-page.module.css";

function IngredientPage({page}) {
    let { id } = useParams();
    const { ingredients } = useSelector(state => state.ingredients);
    const details = ingredients.find(ingredient => ingredient._id === id);

    if (!details) return null;
    
    return ( page ?
        
        <MainLayout>
            <div className={styles.content}>
                <h2 className={"text text_type_main-large"}>Детали ингредиента</h2>
                <IngredientDetails
                    image={details.image}
                    name={details.name}
                    calories={details.calories}
                    proteins={details.proteins}
                    fat={details.fat}
                    carbohydrates={details.carbohydrates}
                />
            </div>
        </MainLayout> :
        <>
            <IngredientDetails
                image={details.image}
                name={details.name}
                calories={details.calories}
                proteins={details.proteins}
                fat={details.fat}
                carbohydrates={details.carbohydrates}
            />
        </>
    )
}

IngredientPage.propTypes = {
    page: PropTypes.bool,
}

export default IngredientPage;