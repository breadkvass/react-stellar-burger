import { RefObject } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './tab-group.module.css';
import { TIngredientType, isIngredientType } from './ingredient-type';


export type TCategory = {
    type: TIngredientType;
    name: string;
    ref: RefObject<HTMLDivElement>;
    offset: number;
}

type TabGroupProps = {
  categories: TCategory[];
  current: TIngredientType;
  onTabClick: (value: TIngredientType) => void;
}

function TabGroup({categories, current, onTabClick}: TabGroupProps) {
    const onClick = (value: string) => {
      if (isIngredientType(value)) {
        onTabClick(value);
      }
    };
    return (
      <div className={"pt-5 " + styles.tab}>
        {categories && categories.map(item => <Tab value={item.type} active={current === item.type} onClick={onClick} key={item.type}>{item.name}</Tab>)}
      </div>
    )
}

export default TabGroup;