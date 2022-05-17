import React, { Component } from "react";
import { ReactDOM } from "react-dom";
import Ex4 from "./Excercise4";
import Card from "./ApprovalCard";
export default class E82 extends Component {

  render() {
    return (
      <div className="card">
        <Card/>
        <Ex4 name = "efy" date =  "newDate()" p = "by by"><Card/></Ex4>
        <Ex4 name = "levi" date = "flkasdjflk" p= "hello world"  />
      </div>
    )
  }
}


