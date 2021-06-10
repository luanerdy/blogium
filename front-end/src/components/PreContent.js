import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function PreContent({ withoutBottomLine, marginY }) {
  return (
    <Container marginY={marginY}>
      <InnerWrapper withoutBottomLine={withoutBottomLine}>
        <Links>
          <Link to="/">HOME</Link>
          <Divider />
        </Links>
      </InnerWrapper>
    </Container>
  );
}

const Container = styled.div`
  margin: ${props => props.marginY ? `${props.marginY}px` : '0'} auto;
  padding: 0 20px;
  max-width: 1040px;
`;

const InnerWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid var(--color-devider-light_gray);
  padding-top: 11px;
  padding-bottom: 12px;
  ${({ withoutBottomLine }) => `${withoutBottomLine ? 'border-bottom: none;' : ''}`}
`;

const Links = styled.div`
  flex: 1 1 auto;
  height: 38px;
  line-height: 38px;
  overflow: hidden;
  white-space: nowrap;

  a {
    margin-right: 8px;
    font-size: 16px;
    color: var(--color-font-secondary);

    &:hover {
      color: var(--color-font-secondary-hover);
    }
  }

  @media (min-width: 768px) {
    a {
      margin-right: 18px;
    }
  }
`;

const Divider = styled.div`
  @media (min-width: 768px) {
    padding-left: 22px;
  }

  padding-left: 12px;
  border-left: 1px solid var(--color-font-primary);
`;
