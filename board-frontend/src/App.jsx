import { useState, useEffect } from 'react'
import Board from './Board';
import Signin from './Signin';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <button onClick={handleLogout} style={{ float: 'right', margin: '10px' }}>Logout</button>
          <Board />
        </div>
      ) : (
        <Signin onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
