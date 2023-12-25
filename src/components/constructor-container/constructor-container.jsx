import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from "react-dnd";
import BurgerComponent, { DraggableBurgerComponent } from '../burger-component/burger-component';
import { setBun, addIngredient } from '../../slices/burgerConstructor';
import styles from './constructor-container.module.css';

function ConstructorContainer() {
    const dispatch = useDispatch();
    const { bun, filling } = useSelector(state => state.burgerConstructor);
    const [{isHover}, dropTarget] = useDrop({
        accept: 'ingredient',
        drop(ingredient) {
            dropHandler(ingredient);
        },
        collect: monitor => ({
            isHover: monitor.isOver(),
        })
    });

    const dropHandler = (ingredient) => {
        if (ingredient.type === 'bun') {
            dispatch(setBun(ingredient._id));
        } else {
            dispatch(addIngredient(ingredient._id));
        }
    };
    
    const borderColor = isHover ? 'white' : 'transparent';

    return (
        <div className={styles.сonstructor__сontainer} ref={dropTarget} style={{border: '1px solid', borderColor}}>
            <BurgerComponent type="top" isLocked={true} className="pl-8" ingredientId={bun} />
            <div className={"custom-scroll " + styles.unlocked}>
                {filling.map((item, i) => (<DraggableBurgerComponent key={item.key} isLocked={false} className={styles.component} ingredientId={item.id} index={i} />))}
            </div>
            <BurgerComponent type="bottom" isLocked={true} className="pl-8" ingredientId={bun} />
        </div>
    )
}

export default ConstructorContainer;