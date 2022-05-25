import React from "react";
import Button from "./btn";

class ConfirmBtn extends React.Component {
  render() {
    return (
      <div>
        <Button text="confirm"/> <Button text="cancle" />
        </div>
    )
  }
};

export default ConfirmBtn;