import { useSelector, useDispatch } from '../hooks/hooks';
import { Navigate, useLocation } from "react-router-dom";
import { getUser, updateToken } from "../utils/api";

type TProtected = {
  component: JSX.Element;
}

export const ProtectedOnlyUnAuth = ({ component }: TProtected) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(store => store.auth.isAuth);
  const location = useLocation();
  const refreshToken = localStorage.getItem('refreshToken');
  const accessToken = localStorage.getItem('accessToken');
  const expireInAccToken = useSelector(store => store.auth.expireInAccToken);
  
  if (isAuth === false && refreshToken) {
    if (Date.now() > expireInAccToken) {
      dispatch(updateToken(refreshToken));
    } else {
      if (accessToken != null) {
        dispatch(getUser(accessToken));
      } else {
      console.log('Ошибка токена')
      }
    }
    return <Navigate to="/profile" state={{from: location} } />;
  } else if (isAuth === true) {
    return <Navigate to="/profile" state={{from: location} } />;
  } else {
    return component;
  }
}

export const ProtectedOnlyAuth = ({ component }: TProtected) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(store => store.auth.isAuth);
  const location = useLocation();
  const refreshToken = localStorage.getItem('refreshToken');
  const accessToken = localStorage.getItem('accessToken');
  const expireInAccToken = useSelector(store => store.auth.expireInAccToken);

  if (isAuth === true) {
    return component;
  } else if (isAuth === false && refreshToken) {
    if (Date.now() > expireInAccToken) {
      dispatch(updateToken(refreshToken));
    } else {
      if (accessToken != null) {
        dispatch(getUser(accessToken));
      } else {
      console.log('Ошибка токена')
      }
    }
    return component;
  } else {
    return <Navigate to="/login" state={{from: location} } />;
  }
}

export const Protected = ({ component }: TProtected) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(store => store.auth.isAuth);
  const refreshToken = localStorage.getItem('refreshToken');
  const accessToken = localStorage.getItem('accessToken');
  const expireInAccToken = useSelector(store => store.auth.expireInAccToken);

  if (isAuth === false && refreshToken) {
    if (Date.now() > expireInAccToken) {
      dispatch(updateToken(refreshToken));
    } else {
      if (accessToken != null) {
        dispatch(getUser(accessToken));
      } else {
      console.log('Ошибка токена')
      }
    }
    return component;
  } else {
    return component;
  }
}