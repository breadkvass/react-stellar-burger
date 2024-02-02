import { forwardRef, ReactElement, LegacyRef } from 'react';
import IngredientsItem from '../ingredients-item/ingredients-item';
import { TIngredient } from '../../slices/ingredients';
import styles from './ingredients-section.module.css';

type TProps = {
    name: string;
    data: TIngredient[];
}

const IngredientsSection = forwardRef((props: TProps, ref: LegacyRef<HTMLDivElement> ): ReactElement | null => {
    return (
        <div ref={ref}>
            <h3 className="text text_type_main-medium">
                {props.name}
            </h3>
            <div className={styles.list + " pt-6"}>
                {props.data.map(item => (<IngredientsItem key={item._id} ingredient={item} />))}
            </div>
        </div>
    )
});

export default IngredientsSection;