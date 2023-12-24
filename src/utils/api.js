import {
  setDataIngredients,
  setErrorIngredients,
  setLoadingIngredients
} from '../slices/ingredients';
import {
  setDataOrderDetails,
  setLoadingOrderDetails,
  setErrorOrderDetails
} from '../slices/orderDetails';

import {
  loginSuccess,
  logoutSuccess,
  expireAccessToken
} from '../slices/auth';
import { setEmailUpd, setNameUpd } from '../slices/profileInputs';
import { setDataOrder, setErrorOrder, setLoadingOrder } from '../slices/order';

// import {
//   setLoadingOrders,
//   setDataOrders,
//   setErrorOrders
// } from '../slices/profile-orders';

const BASE_URL = 'https://norma.nomoreparties.space/api';

const checkRes = res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

const fetchGetIngredients = () => {
    return fetch(`${BASE_URL}/ingredients`);
}

export const getIngredients = () => {
    return (dispatch) => {
      dispatch(setLoadingIngredients());
  
      fetchGetIngredients()
          .then(checkRes)
          .then(data => dispatch(setDataIngredients(data.data)))
          .catch(err => {
              dispatch(setErrorIngredients());
              console.log(err);
          });
    }
}

const fetchPostOrder = (ingredients, token) => {
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

export const fetchPostOrderWithRefresh = async (ingredients, token) => {
  try {
    return await fetchPostOrder(ingredients, token);
  } catch (error) {
    if (error.message === 'Token is invalid') {
      updateToken(token);
    }
    return fetchPostOrder(ingredients, token);
  }
}

export const postOrder = (ingredients, token) => {
    return (dispatch) => {
        dispatch(setLoadingOrderDetails());
        fetchPostOrderWithRefresh(ingredients, token)
            .then(checkRes)
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

export const login = (user, onSuccessCallback) => {
  return (dispatch) => {
    fetchPostLogin(user)
      .then(checkRes)
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

export const fetchPostLogout = (token) => {
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

export const logout = (token) => {
  return (dispatch) => {
    fetchPostLogout(token)
      .then(checkRes)
      .then(() => {
        localStorage.removeItem('refreshToken');
        dispatch(logoutSuccess());
      })
      .catch(err => {
          console.log(err);
      });
  }
}

export const fetchPostRegister = (email, password, name) => {
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

export const register = (email, password, name, onSuccessCallback) => {
  return (dispatch) => {
    fetchPostRegister(email, password, name)
      .then(checkRes)
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
    fetchPostRefreshToken(token)
      .then(checkRes)
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

export const fetchGetUser = (token) => {
  return fetch(`${BASE_URL}/auth/user`, {
    method: 'GET',
      headers: {
        'Authorization': token
      },
  });
}

export const fetchGetUserWithRefresh = async (token) => {
  try {
    return await fetchGetUser(token);
  } catch (error) {
    if (error.message === 'Token is invalid') {
      updateToken(token);
    }
    return fetchGetUser(token);
  }
}

export const getUser = (token) => {
  return (dispatch) => {
    fetchGetUserWithRefresh(token)
      .then(checkRes)
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

export const fetchPostResetPassword = (email) => {
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

export const resetPassword = (email, onSuccessCallback) => {
  return (dispatch) => {
    fetchPostResetPassword(email)
      .then(checkRes)
      .then(() => { onSuccessCallback(); })
      .catch(err => {
          console.log(err);
      });
  }
}

export const fetchPostNewPassword = (password, token) => {
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

export const newPassword = (password, token, onSuccessCallback) => {
  return (dispatch) => {
    fetchPostNewPassword(password, token)
      .then(checkRes)
      .then(() => { onSuccessCallback(); })
      .catch(err => {
          console.log(err);
      });
  }
}

export const fetchPatchUpdateUser = (name, email, token) => {
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

export const fetchPatchUpdateUserRefresh = async (name, email, token) => {
  try {
    return await fetchPatchUpdateUser(name, email, token);
  } catch (error) {
    if (error.message === 'Token is invalid') {
      updateToken(token);
    }
    return fetchPatchUpdateUser(name, email, token);
  }
}

export const updateUser = (name, email, token) => {
  return (dispatch) => {
    fetchPatchUpdateUserRefresh(name, email, token)
      .then(checkRes)
      .then(() => {dispatch(getUser(token))})
      .catch(err => {
          console.log(err);
      });
  }
}

export const fetchGetOrder = (number) => {
  return fetch(`${BASE_URL}/orders/${number}`);
}

export const getOrder = (number) => {
  return (dispatch) => {
    dispatch(setLoadingOrder());

    fetchGetOrder(number)
        .then(checkRes)
        .then(data => dispatch(setDataOrder(data.orders)))
        .catch(err => {
            dispatch(setErrorOrder());
            console.log(err);
        });
  }
}