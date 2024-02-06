import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from '../../hooks/hooks';
import { useDrag } from "react-dnd";
import { Counter  } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsPrice from '../ingredients-price/ingredients-price';
import styles from './ingredients-item.module.css';

type TIngredient = {
   _id: string;
   price: number;
   name: string;
   image: string; 
}

type TIngredientsItem = {
    ingredient: TIngredient;
}

function IngredientsItem({ingredient}: TIngredientsItem) {
    const location = useLocation();
    const {bun, filling} = useSelector(state => state.burgerConstructor);
    const [count, setCount] = useState<number>(0);
    const [, dragRef] = useDrag({type: 'ingredient', item: ingredient});

    useEffect(()=> {
        setCount([bun, ...(filling.map(f => f.id)), bun].filter(id => id === ingredient._id).length);
    }, [bun, filling])

    return (
        <Link
            to={`/ingredients/${ingredient._id}`}
            state={{ background: location }} 
            className={styles.item}
        >
            { count > 0 && <Counter count={count} size="default" extraClass="m-1" />}
            <img className={"pl-4 pr-4 " + styles.item__img} src={ingredient.image} alt={ingredient.name} ref={dragRef}/>
            <IngredientsPrice price={ingredient.price} />
            <p className={"text text_type_main-default " + styles.name}>{ingredient.name}</p>
        </Link>
        
    )
}

export default IngredientsItem;