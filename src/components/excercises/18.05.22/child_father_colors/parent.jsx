import React from 'react';
import ChooseColor from './11.1_childToFather';

const colors = ["blue", "red", "yellow"]
class Parent extends Component {
  state = { clicked: "" }

  onButtonClick = (e) => {
    this.setState({ clicked: e.target.value })
  }
  render() {
    return (
      <div>
        {colors.map((btnColor, index) =>
          <ChooseColor key={index} Color={btnColor}
            onButtonClick={this.onButtonClick} />)}
        <h2>{`you clicked on ${this.state.clicked}`}</h2>
      </div>
    )

  }
}

export default Parent;