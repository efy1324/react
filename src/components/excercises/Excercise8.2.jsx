import React, { Component } from "react";
import "./8.2.css"



export default class E8_2 extends Component {
  state = { Ishidden: false }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ Ishidden: true })
    }, 1000)
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ Ishidden: false })
    }, 4000)
  }
  render() {
    return (
      <div>{this.state.Ishidden && <div className="box"></div>}<br/>
        {this.state.Ishidden && <div className="box1"></div>}<br/>
        {this.state.Ishidden && <div className="box2"></div>}<br/>
      </div>
    )
  }
}