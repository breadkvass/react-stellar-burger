import React from 'react';
import PropTypes from 'prop-types';
import { ingredientPropType } from "../../utils/prop-types";
import IngredientsItem from '../ingredients-item/ingredients-item';
import styles from './ingredients-section.module.css';

const IngredientsSection = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <h3 className="text text_type_main-medium">
                {props.name}
            </h3>
            <div className={styles.list + " pt-6"}>
                {props.data.map(item => (<IngredientsItem key={item._id} ingredient={item} count={1} />))}
            </div>
        </div>
    )
});

IngredientsSection.propTypes = {
    name: PropTypes.string,
    data: PropTypes.arrayOf(ingredientPropType)
} 

export default IngredientsSection;