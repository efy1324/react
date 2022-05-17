import { render } from "@testing-library/react";
import React, { Component } from "react";
import './7.1.css';

export default class Ex71 extends Component {
  state = { display: "none", isHidden: false }
  handleShowHide = () => {
    this.setState((prevState) => {
      return { isHidden: !prevState.isHidden }
    })
  };
  render() {
    return (
      <div className="box">
        <button onClick={this.handleShowHide}>show / hide</button>
        {this.state.isHidden && <div className="inner"></div>}

      </div>
    )
  }
}