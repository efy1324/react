
import './App.css';
import React from 'react';
import  Excercise1  from "./components/excercises/Excercise1";
import  Excercise2  from "./components/excercises/Excercise2";
import  Excercise3  from "./components/excercises/Excercise3";
import  Excercise4  from "./components/excercises/Excercise4";
import  Excercise5  from "./components/excercises/Excercise5";
import  Excercise7  from "./components/excercises/Excercise7";
import  Excercise71  from "./components/excercises/Excercise7.1";
import  Excercise72  from "./components/excercises/Excercise7.2";
import  Excercise8_1  from "./components/excercises/Excercise8.1";
import  Excercise8_2  from "./components/excercises/Excercise8.2";
import  Excercise8_3  from "./components/excercises/Excercise8.3";
import  Excercise9_1  from "./components/excercises/Excercise9.1";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (<div>
      {/* {< Excercise1 />} */}
      {/* {< Excercise2 />} */}
      {/* {< Excercise3 />} */}
      {/* {< Excercise4 />} */}
      {/* {< Excercise5 />} */}
      {/* {< Excercise7 />}  */}
      {/* {< Excercise71 />}  */}
      {/* {< Excercise72 />}  */}
      {/* {< Excercise8_1 />}  */}
      {/* {< Excercise8_2 />}  */}
      {/* {< Excercise8_3 />}  */}
      {< Excercise9_1 />} 
    </div>
    );
  }
}

export default App;
