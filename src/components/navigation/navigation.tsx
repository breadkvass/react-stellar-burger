import { ReactNode } from 'react';
import styles from './navigation.module.css';

type TProps = {
    side: string;
    children: ReactNode;
}

const Navigation = (props: TProps) => {
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