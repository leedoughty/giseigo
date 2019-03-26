import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  top: 20px;
  left: 0;
  right: 0;
  position: relative;
  height: 40px;
`;

const Title = styled.div`
  position: absolute;
  font-size: 2em;
  left: 30px;
  cursor: default;
`;

const About = styled.div`
  position: absolute;
  font-size: 2em;
  right: 30px;
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      titleText: "Giseigo",
      aboutText: "About"
    }
  }

  onMouseover(e) {
    this.setState({
      titleText: "擬声語",
      aboutText: "について"
    })
  }

  onMouseout(e) {
    this.setState({
      titleText: "Giseigo",
      aboutText: "About"
    })
  }

  render() {
    const {titleText, aboutText} = this.state;
    return (
      <HeaderContainer onClick={this.props.onClick}>
        <Title onMouseEnter={this.onMouseover.bind(this)}
        onMouseLeave={this.onMouseout.bind(this)}>{titleText}</Title>
        <About onMouseEnter={this.onMouseover.bind(this)}
        onMouseLeave={this.onMouseout.bind(this)}>{aboutText}</About>
      </HeaderContainer>
    )
  }
}

export default Header;
