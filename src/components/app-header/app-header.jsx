
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import style from "./app-header.module.css"

const NavLink = (props) => (
    <div className={'pl-5 pr-5 pt-4 pb-4 ' + style.nav__link}>
        {props.icon}
        <p className="text text_type_main-default">{props.text}</p>
    </div>
)

function AppHeader() {
    return (
        <header className={style.header}>
            <div className={'pt-4 pb-4 ' + style.header__content}> 
                <nav className={style.nav__links + ' ' + style.nav__links_type_left}>
                    <NavLink text='Конструктор' icon={ <BurgerIcon type="secondary" /> } />
                    <NavLink text='Лента заказов' icon={ <ListIcon type="secondary" /> } />
                </nav>
                <Logo alt="Логотип" style={{ alignSelf: "center" }}/>
                <nav className={style.nav__links + ' ' + style.nav__links_type_right}>
                    <NavLink text='Личный кабинет' icon={ <ProfileIcon type="secondary" /> } />
                </nav>
            </div>
        </header>
    );
  }
  
  export default AppHeader;
  