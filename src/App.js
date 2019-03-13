import React, { Component } from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import Dokidoki from './components/Dokidoki';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Main = styled.div`
  position: absolute;
  top: 15vh;
  left: 30vw;
  font-size: 30px;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Main>
          <Dokidoki/>
          <h1>ドキドキ</h1>
          <h1>ふわふわ</h1>
          <h1>タイプタイプ</h1>
          <h1>キラキラ</h1>
        </Main>
      </Container>
    );
  }
}

export default App;
