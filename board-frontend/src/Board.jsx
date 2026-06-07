import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Board({ onLogout }) {
	const navigate = useNavigate();

	// 1. 서버에서 받아온 게시글을 저장할 state 정의
	const [posts, setPosts] = useState([]);

	// 2. 화면이 처음 켜질 때 서버에 데이터를 요청하는 훅
	useEffect(() => {
		const token = localStorage.getItem('accessToken');
		axios.get('http://localhost:8080/api/posts', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then(response => {
				// 3. 성공시 서버에서 받아온 데이터를 state에 저장
				console.log('게시글을 불러왔습니다.');
				setPosts(response.data);
			})
			.catch(error => {
				console.error('게시글을 불러오는 데 실패했습니다:', error);
			});
	}, []); // 빈 배열을 넣어줘야 컴포넌트가 처음 렌더링될 때만 실행됨

	return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>간단한 게시판 목록</h2>
        <div>
          <button onClick={() => navigate('/newpost')} style={{ marginRight: '10px' }}>글쓰기</button>
          <button onClick={onLogout} style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>로그아웃</button>
        </div>
      </div>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>
          {/* 3. 자바스크립트 map 함수를 이용해 배열 데이터를 반복하며 HTML 생성 */}
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Board;