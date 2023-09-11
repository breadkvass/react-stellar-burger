import PropTypes from 'prop-types';
import styles from './navigation.module.css';

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

export default Navigation;

