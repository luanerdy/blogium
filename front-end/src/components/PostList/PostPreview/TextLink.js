import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TextLink = styled(Link)`
  color: inherit;

  h3 {
    padding-top: 5px;
    padding-bottom: 2px;
    font-size: 26px;
    line-height: 1.1;
  }

  p {
    margin-top: 7px;
    color: var(--color-font-secondary);
  }
`;

export default TextLink;
