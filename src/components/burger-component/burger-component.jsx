import PropTypes from 'prop-types';

import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

import { ingredientPropType } from "../../utils/prop-types";

function BurgerComponent(props) {
    let place = '';
    if (props.type === 'top') {
        place = ' (верх)';
    } else if (props.type === 'bottom') {
        place = ' (низ)';
    } else {
        place = '';
    }
    return (
        <div className={props.className}>
            {!props.type && <DragIcon type="primary" />}
            <ConstructorElement type={props.type} isLocked={props.isLocked} text={props.data.name + place} price={props.data.price} thumbnail={props.data.image} />
        </div>
    )
}

BurgerComponent.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    isLocked: PropTypes.bool,
    data: ingredientPropType
} 

export default BurgerComponent;