import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import LoginPage from '../../pages/login-page';
import MainPage from '../../pages/main-page';
import RegistrationPage from '../../pages/registration-page';
import ForgotPasswordPage from '../../pages/forgot-password-page';
import ResetPasswordPage from '../../pages/reset-password-page';
import ProfilePage from '../../pages/profile-page';
import Orders from '../../pages/orders';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  )
}

export default App;