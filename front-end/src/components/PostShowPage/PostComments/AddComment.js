import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

import Button from '../../Button';

export default function AddComment({ postId, comments, setComments }) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  function onAddCommentButtonClick() {
    const data = {
      author: name,
      content
    };

    axios
			.post(`http://localhost:3333/posts/${postId}/comments`, data)
			.then((res) => {
        setComments([...comments, res.data])
			})
			.catch((err) => {
				alert('Erro! Tente novamente!');
			});

    setName('');
    setContent('');
  }

  return (
    <>
      <Title>Add a comment</Title>
      <Input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <CommentBox placeholder="Share your thoughts..." value={content} onChange={e => setContent(e.target.value)}></CommentBox>
      <Button onClick={onAddCommentButtonClick}>Add Comment</Button>
    </>
  );
}

const Title = styled.h1`
  margin-top: 50px;
  margin-bottom: 0;
  font-size: 1.6em;
`;

const Input = styled.input`
  padding-top: 5px;
  font-family: 'Roboto', sans-serif;
  line-height: 1.3;
  letter-spacing: -0.015em;
  width: 100%;
  border: 0;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-left: -2.63px;
  }

  &::placeholder {
    font-style: italic;
  }
`;

const CommentBox = styled.textarea`
  border: 0;
  border-bottom: 1px solid var(--color-devider-light_gray);
  padding: 0;
  padding-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  width: 100%;
  min-height: 120px;

  &::placeholder {
    font-style: italic;
  }
`;
