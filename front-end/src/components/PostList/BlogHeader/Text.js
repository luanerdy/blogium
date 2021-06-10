import styled from 'styled-components';

const Text = styled.div`
  padding: 25px 0;

  h1 {
    padding: 5px 0 4px;
    font-size: 34px;
    font-weight: 600;
    line-height: 34px;
  }

  h2 {
    padding-bottom: 5px;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    color: rgba(255, 255, 255, 0.95);
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 42px;
      line-height: 42px;
    }

    h2 {
      font-size: 26px;
      line-height: 36px;
    }
  }

  @media (min-width: 1200px) {
    padding: 2.1vw 0;
  }

  @media (min-width: 1600px) {
    padding: 3.5vw 0;
  }
`;

export default Text;
