import React from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './App.less';
import Home from './components/home/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
