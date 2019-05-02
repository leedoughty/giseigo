import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 25px;
  bottom: 20px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

class JapaneseSentence extends Component {
  render() {
    return (
      <Container>
        <p>心がドキドキする</p>
      </Container>
    )
  }
}

export default JapaneseSentence;
