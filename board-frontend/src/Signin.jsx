import React, { useState } from 'react';
import axios from 'axios';

const Signin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error messages

    try {
      // POST 요청을 하여 로그인 시도
      const response = await axios.post('http://localhost:8080/api/signin', { email, password });

      const { token } = response.data; // 서버에서 받은 토큰
      localStorage.setItem('accessToken', token); // 토큰을 로컬 스토리지에 저장
      alert('로그인 성공!');
      if (onLogin) onLogin(); // 부모 컴포넌트에 로그인 성공 알림
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };
	    return (
    <section>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default Signin;