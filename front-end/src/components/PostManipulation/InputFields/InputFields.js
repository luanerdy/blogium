import React from 'react';
import styled from 'styled-components';
import ImageUrlInput from './ImageUrlInput';
import TitleInput from './TitleInput';

export default function InputFields({ title, coverUrl, onTitleChange, onCoverUrlChange }) {
  return (
    <Container>
      <div>
        <ImageUrlInput
          type="text"
          name="coverUrl"
          placeholder="Image cover url"
          value={coverUrl}
          onChange={onCoverUrlChange}
        />
      </div>
      <div>
        <TitleInput type="text" name="title" placeholder="Title" value={title} onChange={onTitleChange} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  input[type='text'] {
    margin-top: 10px;
    border: none;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 1.58;
    letter-spacing: -0.004em;
  }
`;
