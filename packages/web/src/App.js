import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getCurrentTime } from '@prefix/shared/time'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {getCurrentTime()}
        </p>
      </header>
    </div>
  );
}

export default App;
