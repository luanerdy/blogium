import styled from 'styled-components';

const SubMeta = styled.div`
  flex: 1 1 auto;
  font-size: 15px;
  line-height: 1.4;
  margin-left: 10px;

  span {
    display: block;
    color: var(--color-font-secondary);
  }

  @media (min-width: 768px) {
    line-height: 22.4px;

    a {
      font-size: 16px;
    }
  }
`;

export default SubMeta;
