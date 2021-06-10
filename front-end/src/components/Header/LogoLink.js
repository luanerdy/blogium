import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoSrc from '../../assets/images/logo.png';

const LogoLink = styled(Link)`
  display: block;
  padding: 5px;
  width: 45px;
  height: 45px;
  background: url(${LogoSrc}) no-repeat 50% 50%;
  background-size: 35px 35px;
  opacity: 0.84;
`;

export default LogoLink;
