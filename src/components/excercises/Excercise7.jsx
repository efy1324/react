import React, { Component } from "react";




export default class Ex7 extends Component {

  state = { num: 0 }
  handleClick = () => {
    this.setState((prevState) => {
   return   { num: this.prevState.num + 1 }
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        <h2>{this.state.num}</h2>


      </div>

    )

  }
}