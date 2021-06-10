import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ImageLink = styled(Link)`
  position: relative;
  display: block;

  img {
    display: block;
    width: 100%;
    height: 172px;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    img {
      height: 174px;
    }
  }
`;

export default ImageLink;
