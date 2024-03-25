import Main from './components/MainComponenet';
import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
  return (
    <Router>
      <div className="App">
        <Main />
      </div>
    </Router>
  );
}
}
export default App;