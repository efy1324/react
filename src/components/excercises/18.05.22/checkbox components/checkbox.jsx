import React from "react";


class CheckBox extends React.Component {

  render() {
    return (
      <div>
        <input type='checkbox' checked ={this.props.checked} />
        <label>{this.props.lableName}</label>
      </div>
    )
  }
}
export default CheckBox