import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  z-index: -1;
`;

class Word extends Component {
  render() {
    let Animation = this.props.animation;
    let Sentence = this.props.japaneseSentence;
    return (
      <>
      <Container>
        <Animation>
          <p>{this.props.text}</p>
        </Animation>
      </Container>
        <Sentence>
          {this.props.japaneseSentence}
        </Sentence>
      </>
    )
  }
}

export default Word;
