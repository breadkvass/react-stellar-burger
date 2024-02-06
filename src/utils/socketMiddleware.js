import { fetchPostRefreshToken } from "./api";

export const socketMiddleware = wsConfig => store => {
    let socket = null;
    let isConnected = false;
    let reconnectTimer = 0;
    const { onStart, onStop, onOpen, onMessage, onClose, onError } = wsConfig;

    return next => action => {
        const { type, payload } = action
        const { dispatch } = store
        
        if (type === onStart) {
            socket = new WebSocket(payload);
            isConnected = true;
        }

        if(socket) {
            if (type === onStop) {
              clearTimeout(reconnectTimer);
              isConnected = false;
              reconnectTimer = 0;
              socket.close(1000, 'Пользователь покинул страницу');
            }
      
            socket.onopen = e => {
              dispatch(onOpen(e.type));
            }
      
            socket.onclose = e => {
                if (isConnected) {
                    reconnectTimer = setTimeout(() =>
                    dispatch({ type: onStart }), 3000);
                }
                dispatch(onClose(e.wasClean ? 
                'Закрыто корректно' : 'Закрыто некорректно'));
            }
      
            socket.onerror = e => {
              dispatch(onError(e.message));
            }
          
            socket.onmessage = e => {
                let data = JSON.parse(e.data);
                
                if (data.message === 'Invalid or missing token') {
                    fetchPostRefreshToken(localStorage.getItem('refreshToken'))
                        .then((res) => {
                            localStorage.setItem("refreshToken", res.refreshToken);
                            localStorage.setItem("accessToken", res.accessToken);
                        })
                        .then((res) => {
                            dispatch({
                            type: 'PROFILE_ORDERS_WS_CONNECTION_START', 
                            payload: `${payload}${localStorage.getItem('accessToken').split('Bearer ')[1]}`
                            });
                        })
                        .catch((err) => {
                            return Promise.reject(err);
                        })
                }

                let chekedData = {
                    ...data,
                    orders: checkOrdersIngredients(data.orders)
                };
                dispatch(onMessage(chekedData));
            }
        }
      
        return next(action);
    }
}

function checkOrdersIngredients(arr) {
    return arr.filter(item => item.ingredients.every(el => el));
};