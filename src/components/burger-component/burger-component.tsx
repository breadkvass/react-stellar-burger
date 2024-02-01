import { forwardRef, useRef, ReactElement, LegacyRef } from 'react';
import { useSelector, useDispatch } from '../../hooks/hooks';
import { useDrag, useDrop, DropTargetMonitor, XYCoord } from "react-dnd";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { removeIngredient, moveIngredient, resetDraggingIndex, setDraggingIndex } from '../../slices/burger-constructor';

type TProps = {
    className: string;
    type?: 'top' | 'bottom';
    isLocked: boolean;
    ingredientId: string;
    index?: number;
    handlerId?: Identifier | null;
}

type Identifier = string | symbol;

const BurgerComponent = forwardRef((props: TProps, dragRef: LegacyRef<HTMLDivElement>): ReactElement | null => {
    
    const dispatch = useDispatch();
    const { ingredients, isLoading } = useSelector(state => state.ingredients);
    const { draggingIndex } = useSelector(state => state.burgerConstructor);
    const ingredient = ingredients.find((item) => item._id === props.ingredientId);

    let place = '';
    if (props.type === 'top') {
        place = ' (верх)';
    } else if (props.type === 'bottom') {
        place = ' (низ)';
    } else {
        place = '';
    }

    const deleteHandler = () => {
        if (props.index) {
            dispatch(removeIngredient(props.index));
        }
    }

    const opacity = draggingIndex === props.index ? 0 : 1;

    return <>{!isLoading &&
    <div className={props.className} ref={dragRef} data-handler-id={props.handlerId} style={{ opacity }}>
        {!props.type && <DragIcon type="primary" />}
        {
            ingredient ? <ConstructorElement
            type={props.type}
            isLocked={props.isLocked}
            text={ingredient.name + place}
            price={ingredient.price}
            thumbnail={ingredient.image}
            handleClose={deleteHandler}
        /> :
        <></>
        }
        
    </div>}</>
    
});

export default BurgerComponent;

type TItem = {
    index?: number;
}

export const DraggableBurgerComponent = (props: TProps) => {
    const ref = useRef<HTMLInputElement>(null);
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
        collect(monitor: DropTargetMonitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item: TItem, monitor: DropTargetMonitor) {
            if (!ref.current) {
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = props.index;

            if (item.index) {
                dispatch(setDraggingIndex(item.index));
            }

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();

            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            const clientOffset: XYCoord | null = monitor.getClientOffset();

            const hoverClientY: number | null = clientOffset && clientOffset.y - hoverBoundingRect.top;
        
            if (hoverClientY && dragIndex  && hoverIndex) {
                if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                    return
                }
    
                if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                    return
                }
                    
                dispatch(moveIngredient({from: dragIndex, to: hoverIndex}));
            }

            
            item.index = hoverIndex;
        },
    })

    drag(drop(ref));

    return (
        <BurgerComponent {...props} handlerId={handlerId} ref={ref} />
    );
}