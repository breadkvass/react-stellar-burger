import { useSelector } from 'react-redux';
import BurgerComponent from '../burger-component/burger-component';
import styles from './constructor-container.module.css';
  
function ConstructorContainer() {
    const { bun, filling } = useSelector(state => state.burgerConstructor);

    return (
        <div className={styles.сonstructor__сontainer}>
        <BurgerComponent type="top" isLocked={true} className="pl-8" ingredientId={bun}/>
        <div className={"custom-scroll " + styles.unlocked}>
            {filling.map((id, i) => (<BurgerComponent key={i} isLocked={false} className={styles.component} ingredientId={id}/>))}
        </div>
        <BurgerComponent type="bottom" isLocked={true} className="pl-8" ingredientId={bun} />
        </div>
    )
}

export default ConstructorContainer;