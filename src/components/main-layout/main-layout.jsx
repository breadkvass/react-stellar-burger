import styles from "./main-layout.module.css";
import AppHeader from "../app-header/app-header";

function MainLayout({ children }) {
    return (
        <div className={styles.page}>
            <AppHeader />
            {children}
        </div>
    )
}

export default MainLayout;