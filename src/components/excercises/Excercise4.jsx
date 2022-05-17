import React, { Component } from "react";
import "./4.css"



export default class Ex4 extends Component {

  render() {
    console.log(this.props.children);
    return (
      <div className="card">
        <h1 className="header">{this.props.name} {this.props.date}{this.props.children}</h1>
        <img className="img" src="" alt="stop it"></img>
        <p>{this.props.p}</p>
         </div>
    )
  }
}