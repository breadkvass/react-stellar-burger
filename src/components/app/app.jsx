import { useEffect, useState } from 'react';

import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

import { IngredientsContext } from "../../services/ingredients-context";

function App() {
  const [state, setState] = useState({
    isLoading: true,
    hasError: false,
    data: []
  });

  const url = 'https://norma.nomoreparties.space/api/ingredients';

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(data => setState({
        isLoading: false,
        hasError: false,
        data: data.data
      }))
      .catch(err => {
        setState({
          isLoading: false,
          hasError: true,
          data: []
        });
        console.log(err);
      });
  }, []);
  
  const { data, isLoading, hasError } = state;

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        {isLoading && 'Загрузка...'}
        {hasError && 'Произошла ошибка'}
        {!isLoading && !hasError && data.length &&
          <IngredientsContext.Provider value={{ data, isLoading }}>
            <BurgerIngredients />
            <BurgerConstructor />
          </IngredientsContext.Provider>
        }
      </main>
    </div>
  );
}

export default App;
