import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';
import Landing from './Landing.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : 0,
    };
  }

  render() {
    return (
      <div className="App">
        <Landing
          value={this.state.value}
          onClick={() => this.handleClick()}
        />
      </div>
    );
  }

  handleClick() {
    this.setState({
      value: 1,
    });
  }
}

export default App;
