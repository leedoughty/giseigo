import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  z-index: -1;
`;

class Word extends Component {
  render() {
    return (
      <Container>
        <p>ドキドキ</p>
      </Container>
    )
  }
}

export default Word;
