import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  top: 20px;
  left: 0;
  right: 0;
  position: fixed;
`;

const Title = styled.div`
  position: absolute;
  font-size: 2em;
  left: 30px;
`;

const About = styled.div`
  position: absolute;
  font-size: 2em;
  right: 30px;
`;

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <Title>Giseigo</Title>
        <About>About</About>
      </HeaderContainer>
    )
  }
}

export default Header;
