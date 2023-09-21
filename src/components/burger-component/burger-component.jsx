import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerComponent(props) {
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
    return (!isLoading &&
        <div className={props.className}>
            {!props.type && <DragIcon type="primary" />}
            <ConstructorElement type={props.type} isLocked={props.isLocked} text={ingredient.name + place} price={ingredient.price} thumbnail={ingredient.image} />
        </div>
    )
}

BurgerComponent.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    isLocked: PropTypes.bool,
    ingredientId: PropTypes.string.isRequired
} 

export default BurgerComponent;