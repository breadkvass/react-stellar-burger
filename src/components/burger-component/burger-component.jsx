import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CONSTRUCTOR_REMOVE_INGREDIENT } from '../../services/actions/burger-constractor';

function BurgerComponent(props) {
    const dispatch = useDispatch();
    const { ingredients, isLoading } = useSelector(state => state.ingredients);
    const ingredient = !isLoading && ingredients.find((item) => item._id === props.ingredientId);

    let place = '';
    if (props.type === 'top') {
        place = ' (верх)';
    } else if (props.type === 'bottom') {
        place = ' (низ)';
    } else {
        place = '';
    }

    const deleteHandler = () => {
        dispatch({type: CONSTRUCTOR_REMOVE_INGREDIENT, index: props.index});
    }

    return (!isLoading &&
        <div className={props.className}>
            {!props.type && <DragIcon type="primary" />}
            <ConstructorElement
                type={props.type}
                isLocked={props.isLocked}
                text={ingredient.name + place}
                price={ingredient.price}
                thumbnail={ingredient.image}
                handleClose={deleteHandler}
            />
        </div>
    )
}

BurgerComponent.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    isLocked: PropTypes.bool,
    ingredientId: PropTypes.string.isRequired,
    index: PropTypes.number
}

export default BurgerComponent;