import React, { useState } from 'react';
import axios from 'axios';

function Newpost() {
	const [title, setTitle] = useState('');
	const [detail, setDetail] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = localStorage.getItem('accessToken');
		try {
			const response = await axios.post('http://localhost:8080/api/newpost',
				{ title, detail },
				{
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			);
			alert('게시글이 등록되었습니다!');
			setTitle('');
			setDetail('');
		} catch (error) {
			console.error('게시글 등록 실패:', error);
			alert('게시글 등록에 실패했습니다. 다시 시도해주세요.');
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<table>
					<tbody>
						<tr><td><h2>글쓰기</h2></td></tr>
						<tr><td className="header">Title</td></tr>
						<tr><td><input type="text" 
						placeholder="제목을 입력하세요" 
						name="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						/></td></tr>
						<tr><td className="header">Comment</td></tr>
						<tr><td><textarea placeholder="내용을 입력하세요" name="detail"
						value={detail}
						onChange={(e) => setDetail(e.target.value)}
						></textarea></td></tr>
						<tr><td><button type="submit">등록</button></td></tr>
					</tbody>
				</table>
			</form>
		</div>
	);
}
export default Newpost;