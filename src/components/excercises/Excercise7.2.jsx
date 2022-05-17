import React, { Component } from "react";
import "./7.2.css"

export default class Ex72 extends Component {
  state = { num: 0, labelColor: "black" }
  handleIncrement = () => {
    this.setState((prevState) => {
      return { num: prevState.num < 10 ? prevState.num + 1 : prevState.num };
    })
  }
  handleDecrement = () => {
    this.setState((prevState) => {
      return { num: prevState.num > -10 ? prevState.num - 1 : prevState.num };
    }, () => {
      this.setLabelColor()
    }
    )
  }
  setLabelColor = () => {
    return this.state.num === 0
      ? this.setState({ labelColor: "black" })
      : this.state.num > 0 
      ? this.setState({ labelColor: "green" })
      : this.setState({labelColor:"red"})
        
  }
  render() {
    return (
      <div>
        <label className={`myLabel ${this.state.labelColor}`}>{this.state.num}</label>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    )
  }
}