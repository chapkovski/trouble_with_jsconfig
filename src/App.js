import React from 'react';
import logo from './logo.svg';
import './App.css';
// import MyComp from 'rmv/MyComp'; // this one does not work
import MyComp from 'components/rmv/MyComp';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MyComp></MyComp>
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
