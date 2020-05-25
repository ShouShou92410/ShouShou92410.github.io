import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlogPostCardView from './BlogPostCardView';

function BlogView() {
  return (
    <>
      <Row>
        <Col lg={2} />
        <Col lg={7}>
          <h1>Blog</h1>
          <hr />
          <BlogPostCardView />
          <BlogPostCardView />
        </Col>
      </Row>
    </>
  );
}

export default BlogView;
