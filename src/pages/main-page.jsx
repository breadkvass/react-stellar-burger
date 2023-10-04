import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import { getIngredients } from '../services/actions/ingredients';
import MainLayout from '../components/main-layout/main-layout';
import styles from "./main-page.module.css";

function MainPage() {
  const { ingredients, isLoading, hasError } = useSelector(state => state.ingredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <MainLayout>
      <main className={styles.main}>
        {isLoading && 'Загрузка...'}
        {hasError && 'Произошла ошибка'}
        {!isLoading && !hasError && ingredients.length &&
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
