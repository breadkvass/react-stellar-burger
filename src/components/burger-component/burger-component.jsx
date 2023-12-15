import { forwardRef, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrag, useDrop } from "react-dnd";
import PropTypes from 'prop-types';
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { removeIngredient, moveIngredient, resetDraggingIndex, setDraggingIndex } from '../../slices/burgerConstructor';

const BurgerComponent = forwardRef((props, dragRef) => {
    const dispatch = useDispatch();
    const { ingredients, isLoading } = useSelector(state => state.ingredients);
    const { draggingIndex } = useSelector(state => state.burgerConstructor);
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
        dispatch(removeIngredient(props.index));
    }

    const opacity = draggingIndex === props.index ? 0 : 1

    return (!isLoading &&
        <div className={props.className} ref={dragRef} data-handler-id={props.handlerId} style={{ opacity }}>
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
    const ref = useRef(null);
    const dispatch = useDispatch();

    const [, drag] = useDrag({
        type: 'filling',
        item: { index: props.index },
        end: () => {
            dispatch(resetDraggingIndex());
        },
    });

    const [{ handlerId }, drop] = useDrop({
        accept: 'filling',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = props.index;

            dispatch(setDraggingIndex(item.index));

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();

            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            const clientOffset = monitor.getClientOffset()

            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            dispatch(moveIngredient({from: dragIndex, to: hoverIndex}));
            
            item.index = hoverIndex;
        },
    })

    drag(drop(ref));

    return (
        <BurgerComponent {...props} handlerId={handlerId} ref={ref} />
    );
}

DraggableBurgerComponent.propTypes = {
    index: PropTypes.number
}