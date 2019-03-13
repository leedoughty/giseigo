import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';

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

const Heartbeat = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
`;

const HeartbeatAnimation = styled.span`
  animation: ${Heartbeat} 0.4s ease infinite;
`;

class Dokidoki extends Component {
  render() {
    return (
      <Container>
        <HeartbeatAnimation>
          <p>ドキドキ</p>
        </HeartbeatAnimation>
      </Container>
    )
  }
}

export default Dokidoki;
