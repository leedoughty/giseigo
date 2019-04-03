import React, { Component } from 'react';

let wordsArray = ["ドキドキ", "くるくる", "ぐらりぐらり"];

class Nav extends Component {
  render() {
    return (
      wordsArray.map((word, i) => {
        return (
          <h1
            onClick={() => this.props.handleClick(i)}
            key={i}>{word}
          </h1>)}
      )
  )}
}



export default Nav;
