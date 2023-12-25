import PropTypes from 'prop-types';
import styles from './two-columns.module.css';

function TwoColumns({children}) {
    return (
        <div className={styles.columns}>
            {children}
        </div>
    )
}

TwoColumns.propTypes = {
    children: PropTypes.node,
}

export default TwoColumns;