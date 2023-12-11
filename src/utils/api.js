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

import {
  loginSuccess,
  logoutSuccess,
  setAccessToken,
  setName
} from '../slices/auth';

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

export const login = (user, onSuccessCallback) => {
  return (dispatch) => {
    fetchPostLogin(user)
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .then(data => {
        dispatch(loginSuccess(data));
        localStorage.setItem('refreshToken', data.refreshToken);
        dispatch(setAccessToken(data.accessToken));
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
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
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
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .then(data => {
        dispatch(loginSuccess(data));
        localStorage.setItem('refreshToken', data.refreshToken);
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
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .then(data => {
        localStorage.removeItem('refreshToken');
        localStorage.setItem('refreshToken', data.refreshToken);
        dispatch(getUser(data.accessToken));
        dispatch(setAccessToken(data.accessToken));
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
        dispatch(loginSuccess(data));
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
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
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
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
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

export const updateUser = (name, email, token) => {
  return (dispatch) => {
    fetchPatchUpdateUser(name, email, token)
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .then(data => {
        getUser(token);
       })
      .catch(err => {
          console.log(err);
      });
  }
}