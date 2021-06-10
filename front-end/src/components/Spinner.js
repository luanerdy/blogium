import React from 'react';
import styled from 'styled-components';
import Color from 'color';

export default function Spinner() {
  return (
    <Container>
      <Loader>
        <Circular viewBox="25 25 50 50">
          <Circle cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"></Circle>
        </Circular>
      </Loader>
    </Container>
  );
}

const spinnerWidth = '70px';
const spinnerColor = Color('#1c9963').lighten(0.05);

const Container = styled.div`
  margin: 0 auto;
  padding: 30px 0;
  width: 100%;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }

  @keyframes color {
    0% {
      stroke: ${spinnerColor};
    }
    100% {
      stroke: ${spinnerColor};
    }
  }
`;

const Loader = styled.div`
  position: relative;
  margin: 0 auto;
  width: ${spinnerWidth};

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const Circular = styled.svg`
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Circle = styled.circle`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;
`;
