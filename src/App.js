import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  onChangeEventHandler(e) {
    const val = e.target.value; // ?
    const parts = val.match(/(\d+)([\+*])(\d+)/);
    parts;
    if(!parts) return;
    const left = +parts[1]; //?
    const operator = parts[2]; //?
    const right = +parts[3]; //?
    let result;
    if(operator === '+') {
      result = left + right; //?
    } else if (operator === '*') {
      result = left * right;
    }
    this.setState({result});
  }
  render() {
    return (
      <div className="App">
        <input onChange={this.onChangeEventHandler.bind(this)}/>
        <div id="result">{this.state.result}</div>
      </div>
    );
  }
}

export default App;
