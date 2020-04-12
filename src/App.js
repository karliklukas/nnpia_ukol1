import React from 'react';
import lg from './lg.png';
import './App.css';
import {Greeting} from "./components/Greeting";
import {List} from "./components/List";

const greeting = 'Welcome to TODO list';

function App() {

  return (
    <div className="App">{

        <header className="App-header">
        <img src={lg} className="App-logo" alt="logo" />
        <Greeting name={greeting} />
        <List/>
        </header>
        }
    </div>


  );
}

export default App;
