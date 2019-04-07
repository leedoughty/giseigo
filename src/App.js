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
  position: relative;
  top: 10vh;
  display: grid;
  place-items: center center;
  font-size: 30px;
  cursor: pointer;
`;

let animationsArray = [HeartbeatAnimation, SpinningAnimation, ShakingAnimation];
let wordsArray = ["ドキドキ", "くるくる", "ぐらりぐらり"];

const PageMap = {
  animation: (props) => <Word {...props}/>,
  about: (props) => <About {...props}/>,
  navigation: (props) => <Nav {...props} />,
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "ドキドキ",
      animation: undefined,
      showPage: 'navigation',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (i) => {
    this.setState({
      text: wordsArray[i],
      animation: animationsArray[i],
      showPage: 'animation',
    });
  }

  toggleHeader = () => {
    this.setState({
      showPage: 'navigation'
    })
  }

  toggleAbout = () => {
    this.setState({
      showPage: 'about'
    })
  }

  render() {
    return (
      <Container>
        <Header toggleHeader={this.toggleHeader} toggleAbout={this.toggleAbout}/>
        <Main>
         {
           PageMap[this.state.showPage]({
             handleClick: this.handleClick,
             text: this.state.text,
             animation: this.state.animation,
             toggleHeader: this.state.navigation,
             toggleAbout: this.state.about,
           })
         } 
        </Main>
      </Container>
    );
  }
}

export default App;
