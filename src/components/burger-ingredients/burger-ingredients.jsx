import React from "react";
import styles from "./burger-ingredients.module.css"
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { Counter  } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

// const Tab1 = (props) => {
//     const activeClass = props.active ? ' tab_type_current' : '';
//     const className = 'tab pt-4 pr-10 pb-4 pl-10' + activeClass;

//     const handleClick = event => {
//         props.onClick(props.value);
//     }

//     return (
//         <div className={className} onClick={handleClick}>
//             <span className="text text_type_main-default">{props.children}</span>
//         </div>
//     )
// }

class TabGroup extends React.Component {
    state = {
        current: '1'
    }

    setCurrent(value) {
        this.setState ({
            current: value
        })
    }

    render() {
        return (
            <div className="pt-5" style={{ display: 'flex' }}>
                <Tab value="1" active={this.state.current === '1'} onClick={this.setCurrent.bind(this)}>
                    Булки
                </Tab>
                <Tab value="2" active={this.state.current === '2'} onClick={this.setCurrent.bind(this)}>
                    Соусы
                </Tab>
                <Tab value="3" active={this.state.current === '3'} onClick={this.setCurrent.bind(this)}>
                    Начинки
                </Tab>
            </div>
        )
    } 
}

function IngredientsPrice(props) {
    return (
        <div className={styles.item__price}>
            <p className={"text text_type_digits-default"}>{props.price}</p>
            <CurrencyIcon />
        </div>
    )
}

IngredientsPrice.propTypes = {
    price: PropTypes.number
}

function IngredientsItem(props) {
    return (
        <li className={styles.item}>
        { props.count > 0 && <Counter count={props.count} size="default" extraClass="m-1" />}
            <img className="pl-4 pr-4" src={props.data.image} alt={props.data.name} style={{width: "240px", height: "120px"}} />
            <IngredientsPrice price={props.data.price} />
            <p className={"text text_type_main-default " + styles.name}>{props.data.name}</p>
        </li>
    )
}

IngredientsItem.propTypes = {
    count: PropTypes.number,
    data: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number
      })
}

function IngredientsSection(props) {
    return (
        <div>
            <h3 className="text text_type_main-medium">
                {props.name}
            </h3>
            <div className={styles.list + " pt-6"}>
                {props.data.map(item => (<IngredientsItem key={item._id} data={item} count={1} />))}
            </div>
        </div>
    )
}

IngredientsSection.propTypes = {
    name: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number
      })
    )
} 

const IngredientsContainer = (props) => {
    const buns = props.data.filter((item) => item.type === 'bun');
    const sauces = props.data.filter((item) => item.type === 'sauce').sort((a, b) => b.price - a.price);
    const mains = props.data.filter((item) => item.type === 'main').sort((a, b) => b.price - a.price);
    
    return (
        <div className={"custom-scroll mt-10 " + styles.container}>
            <IngredientsSection  name="Булки" data={buns} />
            <IngredientsSection name="Соусы" data={sauces} />
            <IngredientsSection name="Начинка" data={mains} />
        </div>
    )
}

IngredientsContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string,
        image: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number
      })
    )
} 

function BurgerIngredients(props) {
    return (
        <div className={styles.content}>
            <h2 className="pt-10 text text_type_main-large">Соберите бургер</h2>
            <TabGroup />
            <IngredientsContainer data={props.data} />
        </div>
    );
}
  
BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string,
        image: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number
      })
    )
} 

export default BurgerIngredients;