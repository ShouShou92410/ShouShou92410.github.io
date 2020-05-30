import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import BlogPostList from './list/BlogPostList';
import BlogPostRead from './read/BlogPostRead';
import BlogPostNew from './new/BlogPostNew';
import BlogPostEdit from './edit/BlogPostEdit';

function BlogView({ currentUser }) {
  return (
    <>
      <Row>
        <Col lg={2} />
        <Col lg={7}>
          <Switch>
            <Route path="/blog/read">
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
          <Switch>
            <Route path="/blog">
              {currentUser && (
                <Button variant="success" as={Link} to={`/blog/new`} className="mt-2 w-100">
                  New Post
                </Button>
              )}
            </Route>
          </Switch>
        </Col>
      </Row>
    </>
  );
}

export default BlogView;
