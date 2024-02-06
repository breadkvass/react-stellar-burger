import styles from './ingredient-value.module.css';

type TProps = {
    name: string;
    value: number;
} 

function IngredientValue(props: TProps) {
    return (
        <div className={styles.value}>
            <p className="text text_type_main-default text_color_inactive">{props.name}</p>
            <p className="text text_type_digits-default text_color_inactive">{props.value}</p>
        </div>
    )
}

export default IngredientValue;