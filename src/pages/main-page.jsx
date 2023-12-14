import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import { getIngredients } from '../utils/api';
import MainLayout from '../components/main-layout/main-layout';
import styles from "./main-page.module.css";

function MainPage() {
  const { isLoading, hasError, ingredients } = useSelector(state => state.ingredients);

  return (
    <MainLayout>
      <main className={styles.main}>
        {isLoading && 'Загрузка...'}
        {hasError && 'Произошла ошибка'}
        {!isLoading && !hasError && ingredients && ingredients.length &&
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        }
      </main>
    </MainLayout>
    )
}

export default MainPage;
