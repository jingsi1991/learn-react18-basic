import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import { ThemeContext } from './context/Theme';
import { UserContext } from './context/User';
import { useState } from 'react';

function App() {
  const list = [
    { name: 123 },
    { name: 2342 },
    { name: 43242 },
    { name: 423432 }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <UserContext.Provider value={{name:'liudawei',age:34}}>
          <ThemeContext.Provider value={{ name: 123, color: 'red' }}>
            <Header list={list} />
            <Home />
          </ThemeContext.Provider>
        </UserContext.Provider>
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
