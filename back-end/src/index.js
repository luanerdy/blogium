import express from 'express';
import cors from 'cors';

import posts from './data/posts.js';
import comments from './data/comments.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/posts', (req, res) => {
	res.send(posts);
});

app.post('/posts', (req, res) => {
    const newId = posts[0] ? posts[posts.length - 1].id + 1 : 1;

	posts.push({
		...req.body,
        contentPreview: req.body.content,
        commentCount: 0,
		id: newId,
	});

    comments.push({
        postId: newId,
        comments: []
    });

	res.send();
});

app.get('/posts/:id', (req, res) => {
	res.send(posts.find((p) => p.id === parseInt(req.params.id)));
});

app.get('/posts/:id/comments', (req, res) => {
    console.log(req.params.id);
	res.send(comments.find(c => c.postId === parseInt(req.params.id)));
});

app.post('/posts/:id/comments', (req, res) => {
	const commentsIndex = comments.findIndex(c => c.postId === parseInt(req.params.id));
    comments[commentsIndex].comments.push(req.body);
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    posts[postIndex].commentCount++;
    res.send(req.body);
});

app.listen(3333);
