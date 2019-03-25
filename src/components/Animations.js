import styled, {keyframes} from 'styled-components';

// DOKIDOKI – HEARTBEAT //

export const Heartbeat = keyframes`
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

export const HeartbeatAnimation = styled.span`
  animation: ${Heartbeat} 0.4s ease infinite;
`;

// KURUKURU – SPINNING //

export const Spin = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

export const SpinningAnimation = styled.div`
  margin: 0 50px 0 50px;
  width: 500px;
  font-size: 100px;
  animation: ${Spin} 0.4s linear infinite;
`;
