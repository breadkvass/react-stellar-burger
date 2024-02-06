import { useState, createRef, SyntheticEvent } from 'react';
import TabGroup, { TCategory } from '../tab-group/tab-group';
import { TIngredientType } from '../tab-group/ingredient-type';
import IngredientsContainer from '../ingredients-container/ingredients-container';
import styles from "./burger-ingredients.module.css";


const category = (type: TIngredientType, name: string): TCategory => ({
    type: type,
    name: name,
    ref: createRef<HTMLDivElement>(),
    offset: 0
})

const categories: Array<TCategory> = [
    category('bun', 'Булки'),
    category('sauce', 'Соусы'),
    category('main', 'Начинки'),
]

function BurgerIngredients() {
    const [currentTab, setCurrentTab] = useState<TIngredientType>(categories[0].type);
    const containerRef = createRef<HTMLDivElement>();

    const tabClickHandler = (value: TIngredientType) => {
        setCurrentTab(value);
        if (categories) {
            const offset = categories.find(item => item.type === value)?.ref.current?.offsetTop || 0;
            containerRef?.current?.scroll({ top: offset + 1 });
        }
    };

    const scrollHandler = (e: SyntheticEvent<Element, Event>) => {
        const scrollPosition = e.currentTarget.scrollTop;
        const nearest = categories.map(item => {
            if (item.ref.current) {
                item.offset = item.ref.current.offsetTop - scrollPosition;
            } 
            return item;
        })
        .filter(item => item.offset <= 0)
            .reduce((prev, current) => (prev && prev.offset > current.offset) ? prev : current);
        setCurrentTab(nearest.type);
    };

    return (
        <div className={styles.content + ' pt-10'}>
            <h2 className="text text_type_main-large">Соберите бургер</h2>
            <TabGroup categories={categories} current={currentTab} onTabClick={tabClickHandler} />
            <IngredientsContainer categories={categories} onScroll={scrollHandler} ref={containerRef} />
        </div>
    );
}

export default BurgerIngredients;