import React, { Component } from 'react';
import './App.css';
import CssExample from './components/css-way';
import ReactTransitionGroup from './components/transition-group/index'
import "antd/dist/antd.css";
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
      <CssExample />
      <ReactTransitionGroup />
      </div>
    );
  }
}

export default App;
