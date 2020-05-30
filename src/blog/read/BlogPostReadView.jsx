import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function BlogPostReadView({ post, handleDelete }) {
  return (
    <>
      <div className="mt-2">
        <Row>
          <Col lg={8}>
            <h1>{post.title}</h1>
          </Col>
          <Col lg={2}>
            <Button variant="warning" className="mt-1 w-100">
              Edit
            </Button>
          </Col>
          <Col lg={2}>
            <Button variant="danger" onClick={handleDelete} className="mt-1 w-100">
              Delete
            </Button>
          </Col>
        </Row>
        <hr className="m-0" />
        <p>{post.content}</p>
      </div>
    </>
  );
}

export default BlogPostReadView;
