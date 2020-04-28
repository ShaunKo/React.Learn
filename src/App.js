import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board.js';
import About from './About.js';
import Banner from './Banner.js';
import Footer from './Footer.js';
import Information from './Information';
import RouterContainer from './Router.js';
import { Router, Route, Link } from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
     
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //   </a>
      //   </header>
      // </div>
//       <div>
        <RouterContainer />
// </div>
    );
  }
}

export default App;
