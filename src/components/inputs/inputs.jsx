import PropTypes from 'prop-types';
import styles from './inputs.module.css';

function Inputs({children}) {
    return (
        <div className={styles.inputs}>
            {children}
        </div>
    )
}

Inputs.propTypes = {
    children: PropTypes.array,
}

export default Inputs;