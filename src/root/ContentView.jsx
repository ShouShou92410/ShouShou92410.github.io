import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import About from '../about/About';
import Management from '../management/Management';
import Quiz from '../quiz/Quiz';
import Blog from '../blog/Blog';
import HomeView from './HomeView';

function ContentView({ currentUser }) {
  return (
    <Container fluid>
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
        {currentUser && (
          <Route path="/management">
            <Management />
          </Route>
        )}
        <Route path="/">
          <HomeView />
        </Route>
      </Switch>
    </Container>
  );
}

export default ContentView;
