import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import Board from './Board';
import Signin from './Signin';
import Signup from './Signup';
import Newpost from './Newpost';
import ProtectedRoute from './ProtectedRoute';

function AppRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('accessToken'));
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/board');
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    navigate('/signin');
  };

  return (
    <Routes>
      {/* 초기 경로 설정 */}
      <Route path="/" element={<Navigate to={isLoggedIn ? "/board" : "/signin"} replace />} />

      {/* 공개 경로 */}
      <Route 
        path="/signin" 
        element={
          !isLoggedIn ? 
          <Signin onLogin={handleLogin} onSignupClick={() => navigate('/signup')} /> : 
          <Navigate to="/board" replace />
        } 
      />
      <Route 
        path="/signup" 
        element={<Signup onSigninClick={() => navigate('/signin')} />} 
      />

      {/* 보호된 경로 */}
      <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
        <Route path="/board" element={<Board onLogout={handleLogout} />} />
        <Route path="/newpost" element={<Newpost />} />
      </Route>

      {/* 잘못된 경로 처리 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
