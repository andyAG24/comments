import React from 'react';
import styled from 'styled-components';

const CommentatorsWrapper = styled.div`
`;

const Author = styled.li``;

const AuthorsList = styled.ul`
  margin-top: 0;
`;

const Title = styled.span`
  font-size: 1.2em;
`;

type CommentatorsType = {
  authors: Array<string>,
}

export default function Commentators({
  authors,
}: CommentatorsType) {
  return (
    <CommentatorsWrapper>
      <Title>Commentators: </Title>
      <AuthorsList>
        { authors.map((author) => (
          <Author key={author}>{author}</Author>
        )) }
      </AuthorsList>
    </CommentatorsWrapper>
  );
}
