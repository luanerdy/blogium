import React, { useState, useEffect } from 'react';
import PostList from './PostList/PostList';
import axios from 'axios';

export default function HomePage() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:3333/posts')
			.then((res) => {
				setPosts(res.data);
			})
			.catch((err) => {
				alert('Erro! Tente novamente!');
			});
	}, []);

	return <PostList name="Daily stories" posts={posts} />;
}
