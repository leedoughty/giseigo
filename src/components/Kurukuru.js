import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Spin = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const SpinningAnimation = styled.div`
  margin: 0 50px 0 50px;
  width: 0px;
  font-size: 100px;
  animation: ${Spin} 0.4s ease infinite;
`;

class Kurukuru extends Component {
  render() {
    return (
      <Container>
        <SpinningAnimation>
          <p>くるくる</p>
        </SpinningAnimation>
      </Container>
    )
  }
}

export default Kurukuru;
