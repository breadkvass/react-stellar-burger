import {
  Routes,
  Route,
  useLocation,
  useNavigate
} from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import LoginPage from '../../pages/login-page';
import MainPage from '../../pages/main-page';
import RegistrationPage from '../../pages/registration-page';
import ForgotPasswordPage from '../../pages/forgot-password-page';
import ResetPasswordPage from '../../pages/reset-password-page';
import ProfilePage from '../../pages/profile-page';
import Orders from '../../pages/orders';
import IngredientPage from "../ingredient-page/ingredient-page";
import Modal from "../modal/modal";
import { ProtectedOnlyAuth, ProtectedOnlyUnAuth } from '../protected-route';
import { getIngredients } from "../../utils/api";

function App() {
  let location = useLocation();
  const dispatch = useDispatch();
  let background = location.state && location.state.background;
  const navigate = useNavigate();
  const closeModal = () => {
    navigate('/');
  }

  useEffect(() => dispatch(getIngredients()), []);
  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<ProtectedOnlyUnAuth component={<LoginPage />} />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/profile" element={<ProtectedOnlyAuth component={<ProfilePage />} />} />
        <Route path="/orders" element={<ProtectedOnlyAuth component={<Orders />} />} />
        <Route path="/ingredients/:id" element={<IngredientPage page={true} />} />
      </Routes>
      {background && 
        <Routes>
          <Route path="/ingredients/:id" element={
            <Modal title="Детали ингредиента" padding=" pt-10 pb-15 pl-10 pr-10" closeHandler={closeModal}>
              <IngredientPage page={false}/>
            </Modal>
          } /> 
        </Routes>
      }
    </>
  )
}

export default App;