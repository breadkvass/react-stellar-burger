import styles from "./appheader.module.css";
import yastyles from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

function AppHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
                <nav className={styles.nav__links}>
                    <div className={`${yastyles['pl-5']} ${yastyles['pr-5']}`} style={{ justifySelf: 'start', display: 'flex', flexDirection: 'row', gap: 8 }}>
                        <BurgerIcon type="secondary" />
                        <p>Конструктор</p>
                    </div>
                    <div className='pl-5 pr-5 pt-4 pv-4' style={{ justifySelf: 'start', display: 'flex', flexDirection: 'row', gap: 8 }}>
                        <ListIcon type="secondary" />
                        <p>Лента заказов</p>
                    </div>
                </nav>

            </div>
        </header>
    );
  }
  
  export default AppHeader;
  