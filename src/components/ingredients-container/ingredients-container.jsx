import React from 'react';
import { useSelector } from 'react-redux';
import IngredientsSection from '../ingredients-section/ingredients-section';
import styles from './ingredients-container.module.css';

const IngredientsContainer = React.forwardRef(({ categories, onScroll }, ref) => {
    const { ingredients, isLoading } = useSelector(state => state.ingredients);

    const getItems = (type) => {
        return ingredients.filter((item) => item.type === type).sort((a, b) => b.price - a.price);
    }

    return (
        <div className={"custom-scroll mt-10 " + styles.container} onScroll={onScroll} ref={ref}>
            {!isLoading &&
                categories.map(category =>
                    <IngredientsSection
                        name={category.name}
                        data={getItems(category.type)}
                        ref={category.ref}
                        key={category.type}
                    />
                )
            }
        </div>
    )
});

export default IngredientsContainer;