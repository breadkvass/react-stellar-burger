import { NavLink as Link, useLocation } from 'react-router-dom';
import styles from './nav-link.module.css';
import { ElementType } from 'react';

type TProps = {
    link: string;
    icon: ElementType;
    text: string;
}

const NavLink = (props: TProps) => {
    const location = useLocation();
    const mainStyle = styles.link + ' text text_type_main-default';

    const isActive = location.pathname === props.link;
    const Icon = props.icon;

    return (
        <Link
        to={{ pathname: props.link }}
        className={isActive ? mainStyle + ' text_color_primary' : mainStyle + ' text_color_inactive'}
        >
            <li className={'pl-5 pr-5 pt-4 pb-4 ' + styles.nav__link}>
                <Icon type={isActive ? 'primary' : 'secondary'} />
                {props.text}
            </li>
        </Link>
    
)}

export default NavLink;