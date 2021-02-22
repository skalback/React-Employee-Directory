
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainContainer from './components/MainContainer'
import './components/style.css'

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;



/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

