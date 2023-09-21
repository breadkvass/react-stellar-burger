import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './tab-group.module.css';

function TabGroup({categories, current, onTabClick}) {
    return (
      <div className={"pt-5 " + styles.tab}>
        {categories && categories.map(item => <Tab value={item.type} active={current === item.type} onClick={onTabClick} key={item.type}>{item.name}</Tab>)}
      </div>
    )
}

export default TabGroup;