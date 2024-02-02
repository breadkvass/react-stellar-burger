import {
  Routes,
  Route,
  useLocation,
  useNavigate
} from "react-router-dom";
import { ReactElement, useEffect } from 'react';
import { useDispatch } from "react-redux";
import LoginPage from '../../pages/login-page';
import MainPage from '../../pages/main-page';
import RegistrationPage from '../../pages/registration-page';
import ForgotPasswordPage from '../../pages/forgot-password-page';
import ResetPasswordPage from '../../pages/reset-password-page';
import ProfilePage from '../../pages/profile-page';
import FeedPage from "../../pages/feed-page";
import ProfileOrdersPage from '../../pages/profile-orders-page';
import IngredientPage from "../../pages/ingredient-page";
import Modal from "../modal/modal";
import OrderPage from "../../pages/order-page";
import { FEED_WS_CONNECTION_STOP, ORDERS_WS_CONNECTION_STOP } from "../../slices/actions";
import { ProtectedOnlyAuth, ProtectedOnlyUnAuth, Protected } from '../protected-route';
import { getIngredients } from "../../utils/api";

type TBackground = {
  background: string;
}

type TLocation = {
  pathname: string;
  state: TBackground;
}

function App() {
  let location: TLocation = useLocation();
  const dispatch = useDispatch();
  let background = location.state && location.state.background;
  const navigate = useNavigate();
  
  const closeModal = () => {
    navigate(-1);
  }

  if (location.pathname !== '/feed') {
    dispatch({type: FEED_WS_CONNECTION_STOP});
  };
  
  if (location.pathname !== '/profile/orders') {
    dispatch({type: ORDERS_WS_CONNECTION_STOP});
  };
  
  useEffect(() => dispatch(getIngredients()), []);
  
  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Protected component={<MainPage />} />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/feed/:id" element={<OrderPage page={true} />} />
        <Route path="/login" element={<ProtectedOnlyUnAuth component={<LoginPage />} />} />
        <Route path="/register" element={<ProtectedOnlyUnAuth component={<RegistrationPage />} />} />
        <Route path="/forgot-password" element={<ProtectedOnlyUnAuth component={<ForgotPasswordPage />} />} />
        <Route path="/reset-password" element={<ProtectedOnlyUnAuth component={<ResetPasswordPage />} />} />
        <Route path="/profile" element={<ProtectedOnlyAuth component={<ProfilePage />} />} />
        <Route path="/profile/orders" element={<ProtectedOnlyAuth component={<ProfileOrdersPage />} />} />
        <Route path="/profile/orders/:id" element={<ProtectedOnlyAuth component={<OrderPage page={true} />} />} />
        <Route path="/ingredients/:id" element={<IngredientPage page={true} />} />
      </Routes>
      {background && 
        <Routes>
          <Route path="/ingredients/:id" element={
            <Modal title="Детали ингредиента" padding=" pt-10 pb-15 pl-10 pr-10" closeHandler={closeModal}>
              <IngredientPage page={false} />
            </Modal>
          } />
          <Route path="/feed/:id" element={
            <Modal padding=" pt-5 pb-5 pl-10 pr-10" closeHandler={closeModal}>
              <OrderPage page={false} />
            </Modal>
          } />
          <Route path="/profile/orders/:id" element={
            <ProtectedOnlyAuth component={
              <Modal padding=" pt-5 pb-5 pl-10 pr-10" closeHandler={closeModal}>
              <OrderPage page={false} />
            </Modal>
            } />
          } />
        </Routes>  
      }
    </>
  )
}

export default App;