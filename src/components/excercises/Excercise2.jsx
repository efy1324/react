import React from "react";


const data = ["hello", "world"];
const number1 = 5;
const number2 =6;

const string = "I love React!";

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return <h1>{`${data[0]+ " "+ data[1]}`} {number1+number2}   {`the string length of ${string} is ${string.length}`} </h1>
    
  }
}
export default App;