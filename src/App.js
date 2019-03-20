import React, { Component } from 'react';
import Header from './components/Header';
import styled from 'styled-components';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotClicked: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState({
      isNotClicked: false,
    });
  }

  render() {
    const handleClick = (e) => {
      e.preventDefault();
      console.log('the link was clicked');
      this.handleClick();
    }
    const isNotClicked = this.state.isNotClicked;

    return (
      <Container>
        <Header />

        <Main>
        {isNotClicked ? (
          <React.Fragment>
              <h1 onClick={handleClick}>ドキドキ</h1>
              <h1>ふわふわ</h1>
              <h1>タイプタイプ</h1>
              <h1>キラキラ</h1>
          </React.Fragment>) : (<Word onClick={handleClick}/>
        )}

        </Main>
        <Nav/>

      </Container>
    );
  }
}

export default App;
