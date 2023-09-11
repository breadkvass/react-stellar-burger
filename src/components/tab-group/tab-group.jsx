import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './tab-group.module.css';

function TabGroup() {
    const [current, setCurrent] = useState('1');

    const clickHandler = (value) => {
        setCurrent(value);
    };
    
    return (
      <div className={"pt-5 " + styles.tab}>
        <Tab value="1" active={current === '1'} onClick={clickHandler}>
          Булки
        </Tab>
        <Tab value="2" active={current === '2'} onClick={clickHandler}>
          Соусы
        </Tab>
        <Tab value="3" active={current === '3'} onClick={clickHandler}>
          Начинки
        </Tab>
      </div>
    )
}

export default TabGroup;