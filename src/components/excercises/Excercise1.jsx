
import React from "react";

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return <Header />;
  }
}
class Header extends React.Component{
  constructor(){
    super();
  }
  render(){
      return <a href="https://www.udemy.com/course/react-redux/learn/lecture/25643026#overview">click me</a>
  }
}
export default App;