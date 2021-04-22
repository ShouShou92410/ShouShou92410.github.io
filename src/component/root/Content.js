import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../about/About';
import Project from '../project/Project';
import Home from './Home';

function Content() {
  return (
    <Switch>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/project">
        <Project />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Content;
