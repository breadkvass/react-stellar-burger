
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import style from "./app-header.module.css"

const Navigation = (props) => {
    let alignClass = props.side === 'left' ? style.nav__links_type_left : style.nav__links_type_right;    
    return (
        <nav className={style.nav__links + ' ' + alignClass}>
            <ul className={style.list}>
                {props.children}
            </ul>
        </nav>
    )
}

const NavLink = (props) => (
    <li className={'pl-5 pr-5 pt-4 pb-4 ' + style.nav__link}>
        {props.icon}
        <p className="text text_type_main-default">{props.text}</p>
    </li>
)



function AppHeader() {
    return (
        <header className={style.header}>
            <div className={'pt-4 pb-4 ' + style.header__content}> 
                <Navigation side='left'>
                    <NavLink text='Конструктор' icon={ <BurgerIcon type="secondary" /> } />
                    <NavLink text='Лента заказов' icon={ <ListIcon type="secondary" /> } />
                </Navigation>
                <Logo alt="Логотип" />
                <Navigation side='right'>
                    <NavLink text='Личный кабинет' icon={ <ProfileIcon type="secondary" /> } />
                </Navigation>
            </div>
        </header>
    );
}
  
export default AppHeader;
  