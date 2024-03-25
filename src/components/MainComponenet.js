import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from "./Home"
import Codex from "./Codex"
import ConFusion from './ConFusion';
import Digi from './Digi';
import Example from './Navbar';
import Footer from './Footer';
import './transitions.css'; // Import your CSS file for transitions

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Example />
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={300} 
              classNames="slide" 
            >
              <Switch location={location}>
                <Route path="/" exact component={Home} />
                <Route path='/codex' component={Codex} />
                <Route path="/confusion" component={ConFusion}/>
                <Route path="/digi" component={Digi}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
        <Footer />
      </>
    );
  }
}

export default Main;
