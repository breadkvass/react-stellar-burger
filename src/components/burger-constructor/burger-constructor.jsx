import styles from "./burger-constructor.module.css"
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { LockIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import KratBulka from "../../images/kratornaya-bulka.png";
import SousGalaktika from "../../images/sous-galakticheskiy.png"
import MyasoMollusscov from "../../images/myaso-molluscov.png"
import PlodiDereva from "../../images/plodi-dereva.png"
import MinKolca from "../../images/mineral-kolca.png"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerComponent(props) {
    let place = '';
    if (props.type === 'top') {
        place = ' (верх)';
    } else if (props.type === 'bottom') {
        place = ' (низ)';
    } else {
        place = '';
    }
    return (
    <div className={props.class}>
        {props.type === "undefined" && <DragIcon type="primary" />}
        <ConstructorElement type={props.type} isLocked={props.islocked} text={props.name + place} price={props.price} thumbnail={props.img} />
    </div>
    )
}

function ConstructorContainer() {
    return (
      <div className={styles.сonstructor__сontainer}>
        <BurgerComponent type="top" isLocked={true} name="Краторная булка N-200i" price={20} img={KratBulka} class="pl-8"/>
        <div className={"custom-scroll " + styles.unlocked}>
          <BurgerComponent type="undefined" isLocked={false} name="Соус традиционный галактический" price={30} img={SousGalaktika} class={styles.component}/>
          <BurgerComponent type="undefined" isLocked={false} name="Мясо бессмертных моллюсков Protostomia" price={300} img={MyasoMollusscov} class={styles.component} />
          <BurgerComponent type="undefined" isLocked={false} name="Плоды Фалленианского дерева" price={80} img={PlodiDereva} class={styles.component} />
          <BurgerComponent type="undefined" isLocked={false} name="Хрустящие минеральные кольца" price={80} img={MinKolca} class={styles.component} />
          <BurgerComponent type="undefined" isLocked={false} name="Хрустящие минеральные кольца" price={80} img={MinKolca} class={styles.component} />
        </div>
        <BurgerComponent type="bottom" isLocked={true} name="Краторная булка N-200i" price={20} img={KratBulka} class="pl-8"/>
      </div>
    )
  }

function BurgerConstructor(props) {
    return (
        <div className={styles.content + " mt-25"}>
            <ConstructorContainer data={props.data} />
            <div className={styles.info + " mt-10"}>
              <div className={styles.price}>
                <p className="text text_type_digits-medium">610</p>
                <CurrencyIcon />
              </div>
              <Button htmlType="button" type="primary" size="large">Оформить заказ</Button>
            </div>
        </div>
    );
}
  
export default BurgerConstructor;