import {
  setData as setDataIngredients,
  setError as setErrorIngredients,
  setLoading as setLoadingIngredients
} from '../slices/ingredients';
import {
  setData as setDataOrderDetails,
  setLoading as setLoadingOrderDetails,
  setError as setErrorOrderDetails
} from '../slices/orderDetails';

import { loginSuccess } from '../slices/auth';

const BASE_URL = 'https://norma.nomoreparties.space/api';

const fetchGetIngredients = () => {
    return fetch(`${BASE_URL}/ingredients`);
}

export const getIngredients = () => {
    return (dispatch) => {
      dispatch(setLoadingIngredients());
  
      fetchGetIngredients()
          .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
          .then(data => dispatch(setDataIngredients(data.data)))
          .catch(err => {
              dispatch(setErrorIngredients());
              console.log(err);
          });
    }
}

const fetchPostOrder = (ingredients) => {
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

export const postOrder = (ingredients) => {
    return (dispatch) => {
        dispatch(setLoadingOrderDetails());

        fetchPostOrder(ingredients)
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
            .then(data => dispatch(setDataOrderDetails(data)))
            .catch(err => {
                dispatch(setErrorOrderDetails);
                console.log(err);
            });
    }
}

export const fetchPostLogin = async ({email, password}) => {
  return await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
          email: email, 
          password: password
      })
  });
}

export const login = (user, onSuccessCallback, onFailureCallback) => {
    return (dispatch) => {
        fetchPostLogin(user)
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
            .then(data => {
              dispatch(loginSuccess(data.user));
              localStorage.setItem('refreshToken', data.refreshToken);
              onSuccessCallback();
            })
            .catch(err => {
                console.log(err);
                onFailureCallback();
            });
  }
}

export const fetchPostRegister = ({email, password, name}) => {
  return fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          email: email, 
          password: password,
          name: name
      })
  });
}

export const fetchPostRefreshToken = (token) => {
  return fetch(`${BASE_URL}/auth/token`, {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          token: token
      })
  });
}

export const updateToken = (token) => {
  return (dispatch) => {
    console.log('update token', token);
    fetchPostRefreshToken(token)
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .then(data => {
        localStorage.setItem('refreshToken', data.refreshToken);
        dispatch(getUser(data.accessToken));
      })
      .catch(err => {
          console.log(err);
      });
  }
}

export const fetchGetUser = (token) => {
  return fetch(`${BASE_URL}/auth/user`, {
    method: 'GET',
      headers: {
        'Authorization': token
      },
  });
}

export const getUser = (token) => {
  return (dispatch) => {
    fetchGetUser(token)
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .then(data => {
        dispatch(loginSuccess(data.user));
      })
      .catch(err => {
          console.log(err);
      });
  }
}