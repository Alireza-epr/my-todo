import React, { Component } from 'react';
import './App.css';

import TodoEntry from './components/TodoEntry'
import TodoItems from './components/TodoItems'



class App extends Component {
  render() {
    return [
      <div id="todoapp" className="todoapp">
        <TodoEntry />
        <TodoItems />
      </div>,
      <footer className="info">
        <h1>:{')'}</h1>
        <p>Written by <a href="#">Alireza Eghbalpour</a></p>
        <p>Project of <a href="https://maktabkhooneh.org">Maktabkhooneh</a></p>
      </footer>
    ]
  }
}

export default App;
