import React from 'react';
import "./9.1.css"

export default class Ex9_1 extends React.Component {
  state = { show: true }
  componentDidMount() {
    setTimeout(() => {
      this.setState((prevState) => {
        return { show: prevState.show = false }
      })
    }, 5000);
  }


  render() {
    return <div>{this.state.show && <div className="spiner2"></div>}
    </div>

  }

}