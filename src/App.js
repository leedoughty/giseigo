import React, { Component } from 'react';
import Header from './components/Header';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
      </Container>
    );
  }
}

export default App;
