import React from "react";



class Excercise3 extends React.Component {
  render() {
    return box1
  }
}
class box1 extends React.Component {
  render() {
    return <div className="box-1">
      <box-2/>
    </div>
  }
}
class box2 extends React.Component {
  render() {
    return <div className="box-2">
      <box-3 />
    </div>
  }
}
class box3 extends React.Component {
  render() {
    return <div className="box-3">
      <box-4 />
      <box-4 />
    </div>
  }
}
class box4 extends React.Component {
  render() {
    return <div className="box-4">

    </div>
  }
}
const style = {
  box1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
      backgroundColor: 'green',
      opacity: '0.8'
    },
    box2: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '90vw',
      height: '90vh',
      backgroundColor: 'blue',
      opacity: '0.8'
    },
    box3: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80vw',
      height: '80vh',
      backgroundColor: 'pink',
      opacity: '0.8'
    },
    box4: {
      margin: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'spaeBetween',
      width: '25vw',
      height: '25vh',
      backgroundColor: 'purple',
      opacity: '0.8'
    }

}
    export default Excercise3