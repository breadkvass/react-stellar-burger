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
import PropTypes from 'prop-types';

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
    <div className={props.className}>
        {!props.type && <DragIcon type="primary" />}
        <ConstructorElement type={props.type} isLocked={props.islocked} text={props.data.name + place} price={props.data.price} thumbnail={props.data.image} />
    </div>
    )
}

BurgerComponent.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  text: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  className: PropTypes.string
} 

const burger = {
  top: '60666c42cc7b410027a1a9b1',
  middle: [
    '60666c42cc7b410027a1a9b9',
    '60666c42cc7b410027a1a9b4',
    '60666c42cc7b410027a1a9bc',
    '60666c42cc7b410027a1a9bb',
    '60666c42cc7b410027a1a9bb'
  ],
  bottom: '60666c42cc7b410027a1a9b1'
}


// {buns.map((item) => (<BurgerComponent data={item} />))}

function findIngredientById(data, id) {
  return data.find((item) => item._id === id);
}

function ConstructorContainer(props) {
  const top = findIngredientById(props.data, burger.top);
  const bottom = findIngredientById(props.data, burger.bottom);
  const middle = burger.middle.map(id => findIngredientById(props.data, id));

    return (
      <div className={styles.сonstructor__сontainer}>
        <BurgerComponent type="top" isLocked={true} className="pl-8" data={top}/>
        <div className={"custom-scroll " + styles.unlocked}>
          {middle.map((item, i) => (<BurgerComponent key={i} isLocked={false} className={styles.component} data={item}/>))}
        </div>
        <BurgerComponent type="bottom" isLocked={true} className="pl-8" data={bottom} />
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

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    _id: PropTypes.string
  })
)
} 

export default BurgerConstructor;