import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import Landing from './Landing.js'
import Questionaire from './Questionaire.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/questionaire">Questionaire</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Landing} />
            <Route path="/questionaire" component={Questionaire} />
          </div>
        </Router>
        {/*
        <Landing
          value={this.state.value}
          onClick={() => this.handleClick()}
        />
        */}
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
