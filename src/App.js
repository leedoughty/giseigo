import React, { Component } from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import Word from './components/Word';
import Nav from './components/Nav';
import {HeartbeatAnimation, SpinningAnimation, ShakingAnimation} from './components/Animations.js';
import About from './components/About';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Main = styled.div`
  position: absolute;
  top: 15vh;
  left: 35vw;
  display: grid;
  place-items: center center;
  font-size: 30px;
  cursor: pointer;
`

let animationsArray = [HeartbeatAnimation, SpinningAnimation, ShakingAnimation];
let wordsArray = ["ドキドキ", "くるくる", "ぐらりぐらり"];

const PageMap = {
  japanese: Dokidoki,
  about: About
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO reverse clicked state so it is clearer
      isNotClicked: true,
      text: "ドキドキ",
      animation: undefined,
      showPage: 'japanese'
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

  toggleHeader = () => {
    this.setState({
      isNotClicked: true
    })
  }

  toggleAbout = () => {
    this.setState({
      aboutIsOpen: true
    })
  }

  render() {
    const isNotClicked = this.state.isNotClicked;

    return (
      <Container>
        <Header onClick={this.toggleHeader} />
        <Main>

        {/*} {pageMap.map(page => (
        //   page === this.state.showPage ? pageMap[displayPage] : null
         ))} */}

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
