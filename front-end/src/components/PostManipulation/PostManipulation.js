import React from 'react';
import Editor from 'react-medium-editor';
import editorOptions from './editorOptions';
import PostContent from '../PostContent';
import Button from '../Button';
import PostMeta from './PostMeta';
import InputFields from './InputFields/InputFields';
import PostActions from './PostActions';
import CancelLink from './CancelLink';

export default function PostManipulation({
  title,
  onTitleChange,
  coverUrl,
  onCoverUrlChange,
  content,
  onContentChange,
  onPostSaveButtonClick,
  postId,
}) {
  return (
    <main>
      <PostMeta>
        <InputFields
          title={title}
          coverUrl={coverUrl}
          onTitleChange={(e) => onTitleChange(e.target.value)}
          onCoverUrlChange={(e) => onCoverUrlChange(e.target.value)}
        />
      </PostMeta>
      <PostContent style={{ marginTop: 20 }}>
        <Editor tag="div" text={content} onChange={onContentChange} options={editorOptions} />
      </PostContent>
      <PostActions>
        <Button style={{ marginRight: '10px' }} onClick={onPostSaveButtonClick}>
          Save
        </Button>
        <CancelLink to={postId ? `/posts/${postId}` : '/'}>Cancel</CancelLink>
      </PostActions>
    </main>
  );
}
