import { ReactNode } from "react";
import AppHeader from "../app-header/app-header";
import styles from "./main-layout.module.css";

type TChildren = {
    children: ReactNode;
}

function MainLayout({ children }: TChildren) {
    return (
        <div className={styles.page}>
            <AppHeader />
            {children}
        </div>
    )
}

export default MainLayout;