import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../../pages/login-page';
import MainPage from '../../pages/main-page';
import RegistrationPage from '../../pages/registration-page';
import ForgotPasswordPage from '../../pages/forgot-password-page';
import ResetPasswordPage from '../../pages/reset-password-page';
import ProfilePage from '../../pages/profile-page';
import Orders from '../../pages/orders';
import { ProtectedOnlyAuth, ProtectedOnlyUnAuth } from '../protected-route';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<ProtectedOnlyUnAuth component={<LoginPage />} />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/profile" element={<ProtectedOnlyAuth component={<ProfilePage />} />} />
        <Route path="/orders" element={<ProtectedOnlyAuth component={<Orders />} />} />
      </Routes>
    </Router>
  )
}

export default App;