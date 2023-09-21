import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from "react-dnd";
import BurgerComponent from '../burger-component/burger-component';
import { CONSTRUCTOR_SET_BUN, CONSTRUCTOR_ADD_INGREDIENT } from '../../services/actions/burger-constractor';
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
            dispatch({type: CONSTRUCTOR_SET_BUN, ingredientId: ingredient._id});
        } else {
            dispatch({type: CONSTRUCTOR_ADD_INGREDIENT, ingredientId: ingredient._id});
        }
    };
    
    const borderColor = isHover ? 'lightgreen' : 'transparent';

    return (
        <div className={styles.сonstructor__сontainer} ref={dropTarget} style={{border: '1px solid', borderColor}}>
            <BurgerComponent type="top" isLocked={true} className="pl-8" ingredientId={bun} />
            <div className={"custom-scroll " + styles.unlocked}>
                {filling.map((id, i) => (<BurgerComponent key={i} isLocked={false} className={styles.component} ingredientId={id} index={i} />))}
            </div>
            <BurgerComponent type="bottom" isLocked={true} className="pl-8" ingredientId={bun} />
        </div>
    )
}

export default ConstructorContainer;