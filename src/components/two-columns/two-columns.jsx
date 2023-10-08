import styles from './two-columns.module.css';

function TwoColumns({children}) {
    return (
        <div className={styles.columns}>
            {children}
        </div>
    )
}

export default TwoColumns;