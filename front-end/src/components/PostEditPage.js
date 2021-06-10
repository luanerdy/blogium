import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import { useHistory, useParams } from 'react-router-dom';
import PostManipulation from './PostManipulation/PostManipulation';

export default function PostEditPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [content, setContent] = useState('');
  const [isSaveButtonDisabled, setSaveButtonDisable] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const post = {
      id: 1,
      title: 'Hello World',
      coverUrl: 'https://miro.medium.com/max/1024/1*OohqW5DGh9CQS4hLY5FXzA.png',
      contentPreview: 'Esta é a estrutura de um post esperado pelo front-end',
      content: 'Este é o conteúdo do post, o que realmente vai aparecer na página do post...'
    };

    setPost(post);

    setTitle(post.title);
    setCoverUrl(post.coverUrl);
    setContent(post.content);
  }, [postId]);

  function onPostSaveButtonClick() {}

  if (!post || !content) return <Spinner />;

  return (
    <PostManipulation
      title={title}
      onTitleChange={(newTitle) => setTitle(newTitle)}
      coverUrl={coverUrl}
      onCoverUrlChange={(newCoverUrl) => setCoverUrl(newCoverUrl)}
      content={content}
      onContentChange={(newContent) => setContent(newContent)}
      onPostSaveButtonClick={onPostSaveButtonClick}
      postId={postId}
    />
  );
}
