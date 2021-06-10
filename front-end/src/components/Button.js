import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  border: 1px solid var(--color-btn-border);
  border-radius: 4px;
  padding: 0 14px;
  height: 33px;
  background-color: transparent;
  line-height: 33px;
  font-size: 16px;
  color: var(--color-link-text);
  cursor: pointer;

  ${({ smallest }) =>
    smallest &&
    `
    padding: 0 10px;
    height: 19px;
    line-height: 19px;
  `}

  ${({ inverted }) =>
    inverted &&
    `
    border-color: var(--color-btn-border);
    background-color: var(--color-btn-border);
    color: white;
  `}

  @media (min-width: 768px) {
    padding: 0 16px;
    height: 37px;
    line-height: 37px;

    ${({ smallest }) =>
      smallest &&
      `
      padding: 0 10px;
      height: 19px;
      line-height: 19px;
      font-size: 15px;
  `}
  }
`;

export default Button;
