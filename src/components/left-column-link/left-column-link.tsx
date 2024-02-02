import { NavLink, useLocation } from 'react-router-dom';
import styles from './left-column-link.module.css';

type TProps = {
    link: string;
    text: string;
}

function LeftColumnLink(props: TProps) {
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

export default LeftColumnLink;