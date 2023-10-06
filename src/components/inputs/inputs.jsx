import styles from './inputs.module.css';

function Inputs({children}) {
    return (
        <div className={styles.inputs}>
            {children}
        </div>
    )
}

export default Inputs;