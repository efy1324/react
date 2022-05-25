import React from "react";
import CheckBox from "./checkbox"


class DefaultValues extends React.Component {


  render() {
    return (
      <div>
        <CheckBox lableName = "I read the term of the app" checked ="Checked by default" />
        <CheckBox lableName = "I accept the term of the app" checked ="Checked by default"/>
        <CheckBox lableName = "I want to get the weekly news letter"/>
        <CheckBox lableName = "I want to get sales and offers"/>
      </div>
    )
  }
}
export default DefaultValues