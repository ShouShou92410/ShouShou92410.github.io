import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import HomeView from './HomeView';
import About from '../about/About';
import Management from '../management/Management';
import Quiz from '../quiz/Quiz';
import Blog from '../blog/Blog';

function ContentView() {
  return (
    <Container fluid className="mt-2">
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/management">
          <Management />
        </Route>
        <Route path="/">
          <HomeView />
        </Route>
      </Switch>
    </Container>
  );
}

export default ContentView;
