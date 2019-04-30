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
  @media (max-width: 768px) {
    width: 100px;
  }
`;

// GURARIGURARI - SHAKING //

export const Shaking = keyframes`
  0% { transform: translate(2px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(0px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(2px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(2px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

export const ShakingAnimation = styled.h1`
  font-size: 100px;
  animation: ${Shaking} 0.8s linear infinite;
  @media (max-width: 768px) {
    width: 300px;
  }
`;
