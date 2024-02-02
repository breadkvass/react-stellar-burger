import {
  setDataIngredients,
  setErrorIngredients,
  setLoadingIngredients
} from '../slices/ingredients';
import {
  setDataOrderDetails,
  setLoadingOrderDetails,
  setErrorOrderDetails
} from '../slices/order-details';

import {
  loginSuccess,
  logoutSuccess,
  expireAccessToken
} from '../slices/auth';
import { setEmailUpd, setNameUpd } from '../slices/profile-inputs';
import { setDataOrder, setErrorOrder, setLoadingOrder } from '../slices/order';
import { ErrorResponse } from 'react-router-dom';
import { Dispatch } from 'redux';

type TToken = string;
type TUser = {
  name?: string;
  email?: string;
  password?: string;
}
type TUserDetail = string;
type TNumber = string;
type TDispatch = Dispatch;


const BASE_URL = 'https://norma.nomoreparties.space/api';

const fetchGetIngredients = () => {
    return fetch(`${BASE_URL}/ingredients`);
}

export const getIngredients = () => {
    return (dispatch: TDispatch) => {
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

const fetchPostOrder = (ingredients: string[], token: TToken) => {
  return fetch(`${BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({
        ingredients: ingredients,
      })
  });
}

export const fetchPostOrderWithRefresh = async (ingredients: string[], token: TToken) => {
  try {
    return await fetchPostOrder(ingredients, token);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'jwt expired') {
        updateToken(token);
      }
    }
    return fetchPostOrder(ingredients, token);
  }
}

export const postOrder = (ingredients: string[], token: TToken) => {
    return (dispatch: TDispatch) => {
        dispatch(setLoadingOrderDetails());
        fetchPostOrderWithRefresh(ingredients, token)
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
            .then(data => dispatch(setDataOrderDetails(data)))
            .catch(err => {
                dispatch(setErrorOrderDetails);
                console.log(err);
            });
    }
}

export const fetchPostLogin = async ({email, password}: TUser) => {
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

export const login = (user: TUser, onSuccessCallback: Function) => {
  return (dispatch: TDispatch) => {
    fetchPostLogin(user)
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .then(data => {
        dispatch(loginSuccess(data));
        dispatch(setNameUpd(data.user.name));
        dispatch(setEmailUpd(data.user.email));
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('accessToken', data.accessToken);
        dispatch(expireAccessToken());
        onSuccessCallback();
      })
      .catch(err => {
          console.log(err);
      });
  }
}

export const fetchPostLogout = (token: TToken) => {
  return fetch(`${BASE_URL}/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        token: token
    })
});
}

export const logout = (token: TToken) => {
  return (dispatch: TDispatch) => {
    fetchPostLogout(token)
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .then(() => {
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('accessToken');
        dispatch(logoutSuccess());
      })
      .catch(err => {
          console.log(err);
      });
  }
}

export const fetchPostRegister = (email: TUserDetail, password: TUserDetail, name: TUserDetail) => {
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

export const register = (email: TUserDetail, password: TUserDetail, name: TUserDetail, onSuccessCallback: Function) => {
  return (dispatch: TDispatch) => {
    fetchPostRegister(email, password, name)
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .then(data => {
        dispatch(loginSuccess(data));
        dispatch(setNameUpd(data.user.name));
        dispatch(setEmailUpd(data.user.email));
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('accessToken', data.accessToken);
        dispatch(expireAccessToken());
        onSuccessCallback();
      })
      .catch(err => {
          console.log(err);
      });
  }
}

export const fetchPostRefreshToken = (refreshToken: TToken) => {
  return fetch(`${BASE_URL}/auth/token`, {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          token: refreshToken
      })
  });
}

export const updateToken = (refreshToken: TToken) => {
  return (dispatch: Function) => {
    fetchPostRefreshToken(refreshToken)
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .then(data => {
        localStorage.removeItem('refreshToken');
        localStorage.setItem('refreshToken', data.refreshToken);
        dispatch(getUser(data.accessToken));
        localStorage.setItem('accessToken', data.accessToken);
        dispatch(expireAccessToken());
      })
      .catch(err => {
          console.log(err);
      });
  }
}

export const fetchGetUser = (accessToken: TToken) => {
  return fetch(`${BASE_URL}/auth/user`, {
    method: 'GET',
      headers: {
        'Authorization': accessToken
      },
  });
}

export const fetchGetUserWithRefresh = (accessToken: TToken) => {
  try {
    return fetchGetUser(accessToken);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'jwt expired') {
        const refreshToken = localStorage.getItem('refreshToken')
        refreshToken ? updateToken(refreshToken) : console.log(error);
      }
    }
    return fetchGetUser(accessToken);
  }
}

export const getUser = (accessToken: TToken) => {
  return (dispatch: TDispatch) => {
    fetchGetUserWithRefresh(accessToken)
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .then(data => {
        dispatch(loginSuccess(data));
        dispatch(setNameUpd(data.user.name));
        dispatch(setEmailUpd(data.user.email));
      })
      .catch(err => {
          console.log(err);
      });
  }
}

export const fetchPostResetPassword = (email: TUserDetail) => {
  return fetch(`${BASE_URL}/password-reset`, {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email
      })
  });
}

export const resetPassword = (email: TUserDetail, onSuccessCallback: Function) => {
  return (dispatch: TDispatch) => {
    fetchPostResetPassword(email)
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .then(() => { onSuccessCallback(); })
      .catch(err => {
          console.log(err);
      });
  }
}

export const fetchPostNewPassword = (password: TUserDetail, token: TToken) => {
  return fetch(`${BASE_URL}/password-reset/reset`, {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: password,
        token: token
      })
  });
}

export const newPassword = (password: TUserDetail, token: TToken, onSuccessCallback: Function) => {
  return (dispatch: TDispatch) => {
    fetchPostNewPassword(password, token)
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .then(() => { onSuccessCallback(); })
      .catch(err => {
          console.log(err);
      });
  }
}

export const fetchPatchUpdateUser = (name: TUserDetail, email: TUserDetail, token: TToken) => {
  return fetch(`${BASE_URL}/auth/user`, {
    method: 'PATCH',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        name: name,
        email: email
      })
  });
}

export const fetchPatchUpdateUserRefresh = async (name: TUserDetail, email: TUserDetail, token: TToken) => {
  try {
    return await fetchPatchUpdateUser(name, email, token);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message  === 'jwt expired') {
        updateToken(token);
      }
    }
    return fetchPatchUpdateUser(name, email, token);
  }
}

export const updateUser = (name: TUserDetail, email: TUserDetail, token: TToken) => {
  return (dispatch: Function) => {
    fetchPatchUpdateUserRefresh(name, email, token)
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .then(() => {dispatch(getUser(token))})
      .catch(err => {
          console.log(err);
      });
  }
}

export const fetchGetOrder = (number: TNumber) => {
  return fetch(`${BASE_URL}/orders/${number}`);
}

export const getOrder = (number: TNumber) => {
  return (dispatch: TDispatch) => {
    dispatch(setLoadingOrder());

    fetchGetOrder(number)
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
        .then(data => dispatch(setDataOrder(data.orders)))
        .catch(err => {
            dispatch(setErrorOrder());
            console.log(err);
        });
  }
}