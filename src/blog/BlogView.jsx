import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlogPostList from './list/BlogPostList';
import BlogPostRead from './read/BlogPostRead';
import BlogPostNew from './new/BlogPostNew';
import BlogPostEdit from './edit/BlogPostEdit';
import AboutSidePanelView from '../about/AboutSidePanelView';

function BlogView() {
  return (
    <>
      <Row>
        <Col lg={2} />
        <Col lg={7}>
          <Switch>
            <Route path="/blog/read/:postID">
              <BlogPostRead />
            </Route>
            <Route path="/blog/new">
              <BlogPostNew />
            </Route>
            <Route path="/blog/edit">
              <BlogPostEdit />
            </Route>
            <Route path="/blog">
              <BlogPostList />
            </Route>
          </Switch>
        </Col>
        <Col lg={2}>
          <AboutSidePanelView />
        </Col>
      </Row>
    </>
  );
}

export default BlogView;
