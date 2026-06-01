import {useState} from 'react';
import axios from 'axios';

const Signup = ({ onSigninClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
	event.preventDefault();
	setError(''); // Clear previous error messages

	try {
		axios.post('http://localhost:8080/api/signup', { email, password })
			.then(response => {
				alert('회원가입 성공!');
				if (onSigninClick) onSigninClick(); // 회원가입 성공 후 로그인 페이지로 이동
			})
			.catch(err => {
				setError(err.response?.data?.message || '회원가입 실패. 다시 시도해주세요.');
			});
	} catch (err) {
		setError('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
	}
  };

  return (
    <section>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" name="email"
          value={email} onChange={(event) => setEmail(event.target.value)} required/>
          </div>
          <div>
              <label htmlFor="pwd">비밀번호</label>
              <input type="password" id="pwd" name="pwd"
          value={password} onChange={(event) => setPassword(event.target.value)} required/>
          </div>
                    <div>
              <label htmlFor="username">닉네임</label>
              <input type="text" id="username" name="username"
          value={username} onChange={(event) => setUsername(event.target.value)} required/>
          </div>
          <div>
              <button type="submit">회원가입</button>
          </div>
      </form>
      <div>
        <span>이미 계정이 있으신가요? </span>
        <button type="button" onClick={onSigninClick}>로그인하러 가기</button>
      </div>
    </section>
  );
};

export default Signup;