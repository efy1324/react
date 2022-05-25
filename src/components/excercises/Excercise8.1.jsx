import React, { Component } from "react";




export default class Ex81 extends Component {
  state = { favoriteColor: "blue" }
  componentDidMount() {
    setTimeout(() => {
      this.setState(prevState =>({ favoriteColor: prevState.favoriteColor = "green" }))
    }, 1000)
  }
  componentDidUpdate(){
    document.querySelector("#id").innerHTML = `the updated ${this.state.favoriteColor}`
  }
  render() {
    return (
      <div><h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id="id"></div>
      </div>
    )
  }
}