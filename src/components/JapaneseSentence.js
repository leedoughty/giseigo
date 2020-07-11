import React, { Component } from 'react';
import styled from 'styled-components';

const SentenceContainer = styled.div`
  font-size: 25px;
  bottom: 20px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border: 1px red solid;
`;

class JapaneseSentence extends Component {
  render() {
    return (
      <SentenceContainer>
        <p>{this.props.japaneseSentence}</p>
      </SentenceContainer>
    )
  }
}

export default JapaneseSentence;
