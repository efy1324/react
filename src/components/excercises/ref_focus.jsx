import React from 'react';


class Api extends React.Component {
  constructor(props){
    super(props)
    this.myRef = React.createRef()
  }
  state = {}
  componentDidMount = () => {
    this.myRef.current.focus()
  }
  render() {
    return (
      <>
        <input type='text' ref={this.myRef} />
      </>
    );
  }
}

export default Api;