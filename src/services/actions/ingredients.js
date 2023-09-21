import { fetchGetIngredients } from '../../services/api'

export const INGREDIENTS_SET_LOADING = 'INGREDIENTS_SET_LOADING';
export const INGREDIENTS_SET_DATA = 'INGREDIENTS_SET_DATA';
export const INGREDIENTS_SET_ERROR = 'INGREDIENTS_SET_ERROR';

export const getIngredients = () => {
  return (dispatch) => {
    dispatch({type: INGREDIENTS_SET_LOADING})

    fetchGetIngredients()
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
        .then(data => dispatch({type: INGREDIENTS_SET_DATA, ingredients: data.data }))
        .catch(err => {
            dispatch({type: INGREDIENTS_SET_ERROR});
            console.log(err);
        });
  }
}