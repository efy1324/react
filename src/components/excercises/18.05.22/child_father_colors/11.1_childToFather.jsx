import React from "react";


class ChooseColor extends React.Component {


  render() {
    return (
      <div>
        <button
          onClick={this.props.onButtonClick}
          value={this.props.color}
          style={{ backgroundColor: this.props.color }}>
          {this.props.color}
        </button>
      </div>
    )
  }
}
export default ChooseColor;
