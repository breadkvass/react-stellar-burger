import PropTypes from 'prop-types';
import { UIEventHandler, LegacyRef, Ref } from 'react';
import { forwardRef } from 'react';
import { useSelector } from '../../hooks/hooks';
import IngredientsSection from '../ingredients-section/ingredients-section';
import styles from './ingredients-container.module.css';

type TObject = {
    name: string;
    type: "bun" | "main" | "sauce";
    ref: Ref<HTMLDivElement>;
}

type TIngredientsContainer = {
    categories: TObject[];
    onScroll: UIEventHandler<HTMLDivElement>;
}

const IngredientsContainer = forwardRef(({ categories, onScroll }: TIngredientsContainer, ref: LegacyRef<HTMLDivElement>) => {
    const { ingredients, isLoading } = useSelector(state => state.ingredients);

    const getItems = (type: 'bun' | 'main' | 'sauce') => {
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
})

export default IngredientsContainer;