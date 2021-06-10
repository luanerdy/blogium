import React from 'react';
import styled from 'styled-components';

export default function PostImage({ coverUrl }) {
  return (
    <FigureContainer>
      <img src={coverUrl} alt="Post cover" />
    </FigureContainer>
  );
}

const FigureContainer = styled.figure`
  img {
    display: block;
    width: 100%;
    height: 50vh;
    object-fit: cover;
    object-position: 100% 80%;
  }
`;
