import { ReactNode } from 'react';
import styles from './two-columns.module.css';

type TTwoColumns = {
    children: ReactNode;
}

function TwoColumns({children}: TTwoColumns) {
    return (
        <div className={styles.columns}>
            {children}
        </div>
    )
}

export default TwoColumns;