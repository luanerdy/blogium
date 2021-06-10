import styled from 'styled-components';

const Content = styled.div`
  display: 'contents';
  margin: 0 auto;
  max-width: 740px;

  pre {
    overflow-x: scroll;
  }

  h1,
  h3,
  h4 {
    font-family: 'Roboto', sans-serif;
  }

  h3 {
    margin-top: 28px;
    margin-left: -1.88px;
    font-size: 30px;
    line-height: 1.15;
    letter-spacing: -0.015em;
  }

  h4 {
    margin-top: 22px;
    margin-left: -1.5px;
    font-size: 24px;
    line-height: 1.22;
    letter-spacing: -0.012em;
  }

  p {
    margin-top: 21px;
  }

  h1 + p {
    margin-top: 10px;
  }

  h3 + p {
    margin-top: 8px;
  }

  h4 + p {
    margin-top: 6px;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }

  strike {
    margin: 0 2px;
    padding: 3px 4px;
    background-color: var(--color-bg-code);
    font-family: Menlo, Monaco, 'Courier New', Courier, monospace;
    font-size: 14px;
    text-decoration-color: transparent;
  }

  pre {
    margin-top: 35px;
    padding: 20px;
    background-color: var(--color-bg-code);
    font-family: Menlo, Monaco, 'Courier New', Courier, monospace;
    font-size: 14px;
    line-height: 1.4;
    white-space: pre-wrap;
  }

  ul,
  ol {
    margin-top: 21px;
    list-style-type: disc;

    li {
      margin-left: 35px;
      margin-bottom: 14px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  blockquote {
    margin-top: 21px;
    margin-left: -20px;
    border-left: 3px solid var(--color-font-primary);
    padding-left: 17px;
  }

  @media (min-width: 768px) {
    font-size: 21px;
    letter-spacing: -0.003em;

    h3 {
      margin-top: 56px;
      margin-left: -2.13px;
      font-size: 34px;
    }

    h4 {
      margin-top: 30px;
      margin-left: -1.63px;
      font-size: 26px;
    }

    p {
      margin-top: 29px;
    }

    strike {
      font-size: 16px;
    }

    pre {
      margin-top: 43px;
      font-size: 16px;
    }

    ul,
    ol {
      margin-top: 29px;
    }

    blockquote {
      margin-top: 29px;
      margin-left: -23px;
      padding-left: 20px;
      padding-bottom: 2px;
    }
  }
`;

export default Content;
