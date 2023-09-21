import PropTypes from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrag, useDrop } from "react-dnd";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CONSTRUCTOR_REMOVE_INGREDIENT, CONSTRUCTOR_MOVE_INGREDIENT } from '../../services/actions/burger-constractor';

const BurgerComponent = React.forwardRef((props, dragRef) => {
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
        dispatch({ type: CONSTRUCTOR_REMOVE_INGREDIENT, index: props.index });
    }

    return (!isLoading &&
        <div className={props.className} ref={dragRef} style={{ visibility: props.isDrag ? 'hidden' : 'inherit' }}>
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
});

BurgerComponent.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    isLocked: PropTypes.bool,
    ingredientId: PropTypes.string.isRequired,
    index: PropTypes.number
}

export default BurgerComponent;

export const DraggableBurgerComponent = (props) => {
    const ref = React.useRef(null);
    const dispatch = useDispatch();

    const [{ isDrag }, drag] = useDrag({
        type: 'filling',
        item: { index: props.index },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    const [, drop] = useDrop({
        accept: 'filling',
        drop: (dropped) => {
            if (props.index === dropped.index) return
            dispatch({type: CONSTRUCTOR_MOVE_INGREDIENT, from: props.index, to: dropped.index});
        }
    })

    drag(drop(ref));

    return (
        <BurgerComponent {...props} isDrag={isDrag} ref={ref} />
    );
}