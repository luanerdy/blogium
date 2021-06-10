import React from 'react';
import styled from 'styled-components';
import ImageLink from './ImageLink';
import Content from './Content';
import TextLink from './TextLink';
import OverlayBorder from './OverlayBorder';
import Meta from './Meta';

export default function PostPreview({ post }) {
  return (
    <Container>
      <ImageLink to={`/posts/${post.id}`}>
        <OverlayBorder />
        <img src={post.coverUrl} alt="blog post cover" />
      </ImageLink>
      <Content>
        <TextLink to={`/posts/${post.id}`}>
          <h3>{post.title}</h3>
          <p>{post.contentPreview}</p>
        </TextLink>
      </Content>
      <Meta>
        {post.commentCount} comments
      </Meta>
    </Container>
  );
}

const Container = styled.article`
  margin-bottom: 25px;

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;
