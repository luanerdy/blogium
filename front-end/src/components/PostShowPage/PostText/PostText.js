import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import PostContent from '../../../components/PostContent';
import Meta from './Meta';

export default function PostText({ post }) {
  const readTimeEstimateInMinutes = Math.ceil(post.content.split(' ').length / 150);

  return (
    <Container>
      <Title>{post.title}</Title>
      <Meta>
        Estimated Read Time: {readTimeEstimateInMinutes} MIN
      </Meta>
      <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px 40px;
  max-width: 740px;
  font-family: 'Merriweather', serif;
  font-size: 18px;
  line-height: 1.58;
  letter-spacing: -0.004em;
`;
