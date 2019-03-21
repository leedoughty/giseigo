import React, { Component } from 'react';
import Header from './components/Header';
import styled, {keyframes} from 'styled-components';
import Dokidoki from './components/Dokidoki';
import Word from './components/Word';
import Nav from './components/Nav';

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

let animationsArray = [HeartbeatAnimation, SpinningAnimation];

let wordsArray = ["ドキドキ", "くるくる", "タイプタイプ", "キラキラ"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO reverse clicked state so it is clearer
      isNotClicked: true,
      text: "ドキドキ",
      animation: undefined
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (i) => {
    console.log(wordsArray[i]);
    this.setState({
      isNotClicked: false,
      text: wordsArray[i],
      animation: animationsArray[i]
    });
  }

  // TODO add toggle function for header, pass function to header, in header file, onclick call that function

  render() {
    const isNotClicked = this.state.isNotClicked;

    return (
      <Container>
        <Header />

        <Main>
        {isNotClicked ? (
          <React.Fragment>
            {
              wordsArray.map((word, i) => {
                return (
                  <h1
                    onClick={() => this.handleClick(i)}
                    key={i}>{word}
                  </h1>)
              })
            }
          </React.Fragment>) : (
            <Word
              text={this.state.text}
              animation={this.state.animation}
            />
        )}

        </Main>
        <Nav/>

      </Container>
    );
  }
}

export default App;
