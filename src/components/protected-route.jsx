import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { updateToken } from "../utils/api";

export const ProtectedOnlyUnAuth = ({ component }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(store => store.auth.isAuth);
  const location = useLocation();
  const refreshToken = localStorage.getItem('refreshToken');
  if (isAuth === false && refreshToken) {
    dispatch(updateToken(refreshToken)) 
    return <Navigate to="/profile" state={{from: location} } />;
  } else if (isAuth === true) {
    return <Navigate to="/profile" state={{from: location} } />;
  } else {
    return component;
  }
}

export const ProtectedOnlyAuth = ({ component }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(store => store.auth.isAuth);
  const location = useLocation();
  const refreshToken = localStorage.getItem('refreshToken');
  if (isAuth === true) {
    return component;
  } else if (isAuth === false && refreshToken) {
    dispatch(updateToken(refreshToken));
    return component;
  }  else {
    return <Navigate to="/login" state={{from: location} } />;
  }

}

// const Protected = ({ onlyUnAuth = false, component }) => {
  // isAuthChecked это флаг, показывающий что проверка токена произведена
  // при этом результат этой проверки не имеет значения, важно только,
  // что сам факт проверки имел место.
  // const isAuth = useSelector(store => store.auth.isAuth);
  // const user = useSelector(store => store.auth.user);
  // const location = useLocation();

//   if (!isAuth) {
//     // Запрос еще выполняется
//     // Выводим прелоадер в ПР
//     // Здесь возвращается просто null для экономии времени
//     return null;
//   }

//   if (onlyUnAuth && user) {
//     // Пользователь авторизован, но роут предназначен для неавторизованного пользователя
//     // Делаем редирект на главную страницу или на тот адрес, что записан в location.state.from
//     const { from } = location.state || { from: { pathname: "/" } };
//     return <Navigate to={from} />;
//   }

  // if (!onlyUnAuth && !user) {
  //   return <Navigate to="/login" state={{ from: location }} />;
  // }

  // !onlyUnAuth && user Пользователь авторизован и роут для авторизованного пользователя

//   return component;
// };

// export const OnlyAuth = Protected;
// export const OnlyUnAuth = ({ component }) => (
//   <Protected onlyUnAuth={true} component={component} />
// );
