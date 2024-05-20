import { fetchPostOrder } from '../../services/api'

export const ORDER_DETAILS_SET_LOADING = 'ORDER_DETAILS_SET_LOADING';
export const ORDER_DETAILS_SET_DATA = 'ORDER_DETAILS_SET_DATA';
export const ORDER_DETAILS_SET_ERROR = 'ORDER_DETAILS_SET_ERROR';

export const postOrder = (ingredients) => {
    return (dispatch) => {
        dispatch({ type: ORDER_DETAILS_SET_LOADING })

        fetchPostOrder(ingredients)
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
            .then(data => dispatch({ type: ORDER_DETAILS_SET_DATA, orderDetails: data }))
            .catch(err => {
                dispatch({ type: ORDER_DETAILS_SET_ERROR });
                console.log(err);
            });
    }
}