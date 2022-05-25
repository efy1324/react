import React from 'react';



class Copy extends React.Component {
  constructor(props) {
    super(props)
    this.textAraeRef = React.createRef()
    // this.state = { textareaData: "" }
  }
  copy = () => {
   this.textAraeRef.current.select()
   document.execCommand("copy")
  }
  render() {
    return (
      <>
        <textarea ref={this.textAraeRef} name="" id="" cols="30" rows="10"/>
        <button onClick={this.copy}> copy </button>
      </>
    );
  }
}

export default Copy;