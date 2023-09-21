import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { getIngredients } from '../../services/actions/ingredients';
import styles from "./app.module.css";

function App() {
  const { ingredients, isLoading, hasError } = useSelector(state => state.ingredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
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
    </div>
  );
}

export default App;
