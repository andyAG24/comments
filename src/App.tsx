import React from 'react';
import './App.css';
import CommentsBlock from 'components/CommentsBlock';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 65%;
  margin: 150px auto 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <CommentsBlock />
      {/* <Commentators /> */}
    </Wrapper>
  );
}

export default App;
