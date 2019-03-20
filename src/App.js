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

let wordsArray = ["ドキドキ", "ふわふわ", "タイプタイプ", "キラキラ"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotClicked: true,
      text: "ドキドキ"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (i) => {
    console.log(wordsArray[i]);
    this.setState({
      isNotClicked: false,
      text: wordsArray[i]
    });
  }

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
              animation={HeartbeatAnimation}
            />
        )}

        </Main>
        <Nav/>

      </Container>
    );
  }
}

export default App;
