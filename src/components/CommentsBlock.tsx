import React, { useEffect, useState } from 'react';
import { IComment } from '../interfaces/IComment';
import Comment from '../components/Comment';
import styled from 'styled-components';
import Commentators from './Commentators';

const CommentsBlockWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const CommentsWrapper = styled.div`
  width: 80%;
`;

const CommentatorsWrapper = styled.div`
  justify-self: flex-start;
  padding-left: 5%;
  width: 20%;
  padding-top: 10px;
`;

const CommentWrapper = styled.div`
  width: 100%;
  min-width: 250px;
  // border-bottom: 1px solid red;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export default function CommentsBlock() {
  const [comments, setComments] = useState<Array<IComment> | []>([]);
  const [authors, setAuthors] = useState<Array<string>>([]);

  async function gettingComments() {
    fetch('data/comments.json')
      .then((res) => res.json())
      .then((data) => setComments(data));
  }

  function getUniqueCommentators(commentsArr: Array<IComment>) {
    let authorsArr: Array<string> = [];
    commentsArr.forEach((item: IComment) => {
      authorsArr.push(item.author);
      if (item.children.length !== 0) {
        authorsArr = authorsArr.concat(getUniqueCommentators(item.children));
      }
    });

    const uniqueAuthors = authorsArr.filter((item, index) => authorsArr.indexOf(item) === index);
    return uniqueAuthors;
  }

  async function gettingUniqueCommentators() {
    setAuthors(getUniqueCommentators(comments));
  }

  useEffect(() => {
    if (comments.length === 0) {
      gettingComments();
    }
    if ((comments.length !== 0) && (authors.length === 0)) {
      gettingUniqueCommentators();
    }
  });

  return (
    <CommentsBlockWrapper>
      <CommentsWrapper>
        { comments.map((comment: IComment) => (
          <CommentWrapper key={comment.id}>
            <Comment comment={comment} />
          </CommentWrapper>
        )) }
      </CommentsWrapper>
      <CommentatorsWrapper>
        <Commentators authors={authors} />
      </CommentatorsWrapper>
    </CommentsBlockWrapper>
  );
}
