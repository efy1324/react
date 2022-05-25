import React from "react";
import Button from "./btn";
import ConfirmBtn from "./confirmOrCancle";

class Form extends React.Component {

  state = { textInput1: "",textInput2:"" }
  onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.textInput1);
    this.props.onSubmit(this.state.textInput1)
  }
  onChange1 = ({target}) => {
      const firstName = target.value
      console.log(firstName);
  }
  render() {
    return (
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <div>
          <label>First Name: </label>
          <input type="text" name="first-name" value={this.state.textInput2}
          onChange = {this.onChange1}/>
        </div>
        <div >
          <label>Last Name: </label>
          <input type="text" value={this.state.textInput1}
            onChange={(e) => this.setState({ textInput1: e.target.value })} />
        </div>
        <div>
          <select>
            <option value>Gender</option>
            <option value>Male</option>
            <option value>Female</option>
          </select>
        </div> <br />
        <div >
          <label>Free Text: </label>
          <textarea rows="2"></textarea>
        </div>
        <Button text="continue" />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form