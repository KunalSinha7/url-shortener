import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Main from './Main'
import Redirect from './HandleRedirect'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/shorturl/" component={Main} />
          <Route path="/shorturl/:urlKey" component={Redirect} />
        </Switch>
      </div>
    );
  }
}

export default App;
