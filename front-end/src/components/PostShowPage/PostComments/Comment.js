import styled from 'styled-components';

export default function Comment({ comment }) {
  return (
    <Container>
      <section>
        <Author>{comment.author}</Author>
      </section>
      <section>
        {comment.content}
      </section>
    </Container>
  );
}

const Container = styled.article`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Author = styled.span`
  font-weight: bold;
  font-size: 1.2em;
  margin-right: 6px;
`;
