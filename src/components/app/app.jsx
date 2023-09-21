import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { INGREDIENTS_SET_DATA, INGREDIENTS_SET_ERROR } from '../../services/actions/ingredients';
import styles from "./app.module.css";

function App() {
  const dispatch = useDispatch();

  const url = 'https://norma.nomoreparties.space/api/ingredients';

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(data => dispatch({type: INGREDIENTS_SET_DATA, ingredients: data.data }))
      .catch(err => {
        dispatch({type: INGREDIENTS_SET_ERROR});
        console.log(err);
      });
  }, []);
  
  const { ingredients, isLoading, hasError } = useSelector(state => state.ingredients);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        {isLoading && 'Загрузка...'}
        {hasError && 'Произошла ошибка'}
        {!isLoading && !hasError && ingredients.length &&
          <>
            <BurgerIngredients />
            <BurgerConstructor />
          </>
        }
      </main>
    </div>
  );
}

export default App;
