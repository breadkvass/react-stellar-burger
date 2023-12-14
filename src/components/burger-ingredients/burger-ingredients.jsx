import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ingredientPropType } from "../../utils/prop-types";
import TabGroup from '../tab-group/tab-group';
import IngredientsContainer from '../ingredients-container/ingredients-container';
import styles from "./burger-ingredients.module.css";

const category = (type, name) => ({
    type: type,
    name: name,
    ref: React.createRef()
})

const categories = [
    category('bun', 'Булки'),
    category('sauce', 'Соусы'),
    category('main', 'Начинки'),
]

function BurgerIngredients() {
    const [currentTab, setCurrentTab] = useState(categories[0].type);
    const containerRef = React.createRef();

    const tabClickHandler = (value) => {
        setCurrentTab(value);
        const offset = categories.find(item => item.type === value).ref.current.offsetTop;
        containerRef.current.scroll({ top: offset + 1 });
    };

    const scrollHandler = event => {
        const scrollPosition = event.currentTarget.scrollTop;
        const nearest = categories.map(item => {
            item.offset = item.ref.current.offsetTop - scrollPosition;
            return item;
        }).filter(item => item.offset <= 0)
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

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType)
}

export default BurgerIngredients;