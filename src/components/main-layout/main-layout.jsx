import PropTypes from 'prop-types';
import AppHeader from "../app-header/app-header";
import styles from "./main-layout.module.css";

function MainLayout({ children }) {
    return (
        <div className={styles.page}>
            <AppHeader />
            {children}
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node,
} 

export default MainLayout;