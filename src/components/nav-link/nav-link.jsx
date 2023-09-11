import styles from './nav-link.module.css';
import PropTypes from 'prop-types';

const NavLink = (props) => (
    <li className={'pl-5 pr-5 pt-4 pb-4 ' + styles.nav__link}>
        {props.icon}
        <p className="text text_type_main-default">{props.text}</p>
    </li>
)

export default NavLink;