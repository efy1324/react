import React, { Component } from "react";




const colors = ['blue', 'red', 'green', 'yellow', 'black'];
let randomColor = Math.floor(Math.random(colors) * 5).toString();
export default class Ex83 extends Component {
  constructor(props) {
      super(props);
      this.state = { myBackgroundColor: "blue", myBorderRadius: "0%", count: 0 };
  }

  componentDidMount() {
      setTimeout(() => {
          this.setState(pre => ({ myBackgroundColor: "red", count: pre.count + 1 }));
      }, 500);
      console.log("componentDidMount", this.state.count);
  }

  componentDidUpdate(prevProps, prevState) {
      console.log("componentDidUpdate", this.state.count);
      const sto = (color, radius = prevState.myBorderRadius) => {
          setTimeout(() => {
              this.setState(pre => ({ myBackgroundColor: color, myBorderRadius: radius, count: pre.count + 1 }));
          }, 500);
      }
      if (this.state.count === 2) {
          sto("yellow");
      } else if (this.state.count === 3) {
          sto("green");
      } else if (this.state.count === 4) {
          sto("brown", "50%");
      } else if (this.state.count > 4) {
          this.setState({ myBackgroundColor: "red", myBorderRadius: "50%", count: 2 });
      }
  }

  render() {
      console.log("render", this.state.count);
      return (
          <div className="box" style={{
              backgroundColor: this.state.myBackgroundColor,
              borderRadius: this.state.myBorderRadius,
          }}></div>
      );
  }
}