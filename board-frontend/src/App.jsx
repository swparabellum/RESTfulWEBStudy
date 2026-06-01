import { useState, useEffect } from 'react'
import Board from './Board';
import Signin from './Signin';
import Signup from './Signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState('signin'); // 'signin' or 'signup'

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  const showSignup = () => setView('signup');
  const showSignin = () => setView('signin');

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <button onClick={handleLogout} style={{ float: 'right', margin: '10px' }}>Logout</button>
          <Board />
        </div>
      ) : (
        view === 'signin' ? (
          <Signin onLogin={handleLogin} onSignupClick={showSignup} />
        ) : (
          <Signup onSigninClick={showSignin} />
        )
      )}
    </div>
  );
}

export default App;
