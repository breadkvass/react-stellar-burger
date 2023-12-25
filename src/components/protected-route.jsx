import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getUser } from "../utils/api";

export const ProtectedOnlyUnAuth = ({ component }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(store => store.auth.isAuth);
  const location = useLocation();
  const refreshToken = localStorage.getItem('refreshToken');
  const accessToken = localStorage.getItem('accessToken');
  
  if (isAuth === false && refreshToken) {
    dispatch(getUser(accessToken));
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
  const accessToken = localStorage.getItem('accessToken');
  if (isAuth === true) {
    return component;
  } else if (isAuth === false && refreshToken) {
    dispatch(getUser(accessToken));
    return component;
  } else if (isAuth === false && !refreshToken) {
    return <Navigate to="/login" state={{from: location} } />;
  }
}

export const Protected = ({ component }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(store => store.auth.isAuth);
  const refreshToken = localStorage.getItem('refreshToken');
  const accessToken = localStorage.getItem('accessToken');
  if (isAuth === false && refreshToken) {
    dispatch(getUser(accessToken));
    return component;
  } else {
    return component;
  }
}