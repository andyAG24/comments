import React from 'react';
import styled from 'styled-components';
import { IComment } from 'interfaces/IComment';

const CommentContent = styled.div`
  min-width: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 10px 0px 0px 10px;
`;

const AuthorAndDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Author = styled.span`
  font-size: 1.2em;  
`;

const PublicationDate = styled.div`
  align-self: flex-end;
`;

type CommentType = {
  comment: IComment,
}

export default function Comment({ comment }: CommentType) {
  return (
    <CommentContent>
      <AuthorAndDateContainer>
        <Author>{comment.author}</Author>
        <PublicationDate>12:22 23.01.2021</PublicationDate>
      </AuthorAndDateContainer>
      <span>{comment.message}</span>
      { !!comment.children
        && comment.children.map((replyingComment) => (
          <Comment key={replyingComment.id} comment={replyingComment} />
        ))}
    </CommentContent>
  );
}
