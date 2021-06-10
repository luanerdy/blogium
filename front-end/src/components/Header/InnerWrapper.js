import styled from 'styled-components';

const InnerWrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1040px;

  display: flex;
  align-items: center;
  height: 56px;

  @media (min-width: 768px) {
    height: 65px;
  }
`;

export default InnerWrapper;
