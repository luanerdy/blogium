import React from 'react';
import styled from 'styled-components';
import cover from '../../../assets/images/blog-header.jpeg';
import Overlay from './Overlay';
import InnerWrapper from './InnerWrapper';
import Text from './Text';

export default function BlogHeader({ name }) {
  return (
    <Container>
      <Overlay />
      <InnerWrapper>
        <Text>
          <h1>{name}</h1>
          <h2>Be updated. Always.</h2>
        </Text>
      </InnerWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  background-position: 48.92857142857143% 32%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${cover});
  color: white;
`;
