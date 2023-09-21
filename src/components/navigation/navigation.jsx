import styles from './navigation.module.css';
import PropTypes from 'prop-types';

const Navigation = (props) => {
    let alignClass = props.side === 'left' ? styles.nav__links_type_left : styles.nav__links_type_right;    
    return (
        <nav className={styles.nav__links + ' ' + alignClass}>
            <ul className={styles.list}>
                {props.children}
            </ul>
        </nav>
    )
}

Navigation.propTypes = {
    side: PropTypes.string
}

export default Navigation;