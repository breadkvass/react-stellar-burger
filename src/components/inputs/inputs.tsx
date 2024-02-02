import { ReactNode } from 'react';
import styles from './inputs.module.css';

type TChildren = {
    children: ReactNode;
}

function Inputs({children}: TChildren) {
    return (
        <div className={styles.inputs}>
            {children}
        </div>
    )
}

export default Inputs;