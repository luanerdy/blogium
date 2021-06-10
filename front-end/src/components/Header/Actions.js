import styled from 'styled-components';

const Actions = styled.div`
  font-size: 16px;

  .guest,
  .user {
    display: flex;
    align-items: center;

    .sign-in,
    .sign-out {
      margin-right: 11px;
    }
  }

  @media (min-width: 768px) {
    .user {
      :global(.avatar) {
        img {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
`;

export default Actions;
