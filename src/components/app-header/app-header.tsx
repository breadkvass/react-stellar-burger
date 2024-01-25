import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import Navigation from "../navigation/navigation";
import NavLink from "../nav-link/nav-link";
import style from "./app-header.module.css";

function AppHeader() {
    return (
        <header className={style.header}>
            <div className={'pt-4 pb-4 ' + style.header__content}> 
                <Navigation side='left'>
                    <NavLink text='Конструктор' icon={BurgerIcon} link={'/'} />
                    <NavLink text='Лента заказов' icon={ListIcon} link={'/feed'}/>
                </Navigation>
                <Logo />
                <Navigation side='right'>
                    <NavLink text='Личный кабинет' icon={ProfileIcon} link={'/profile'} />
                </Navigation>
            </div>
        </header>
    );
}
  
export default AppHeader;
  