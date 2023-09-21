
const BASE_URL = 'https://norma.nomoreparties.space/api';

export const fetchGetIngredients = () => {
    return fetch(`${BASE_URL}/ingredients`);
}

export const fetchPostOrder = (ingredients) => {
    return fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ingredients: ingredients,
        })
    });
}