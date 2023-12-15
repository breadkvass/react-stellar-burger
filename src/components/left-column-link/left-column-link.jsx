import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './left-column-link.module.css';

function LeftColumnLink(props) {
    const location = useLocation();
    const mainStyle = styles.link + ' text text_type_main-medium';

    const isActive = location.pathname === props.link;
    return (
        <NavLink
        to={{ pathname: props.link }}
        className={isActive ? mainStyle + ' text_color_primary' : mainStyle + ' text_color_inactive'}>
            {props.text}
        </NavLink>
    )
}

LeftColumnLink.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string,
} 

export default LeftColumnLink;