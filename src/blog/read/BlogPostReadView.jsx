import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function BlogPostReadView({ currentUser, post, handleDelete }) {
  return (
    <>
      <Row>
        <Col lg={8}>
          <h1>{post.title}</h1>
        </Col>
        {currentUser && (
          <>
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
          </>
        )}
      </Row>
      <hr />
      <p className="mt-2">{post.content}</p>
    </>
  );
}

export default BlogPostReadView;
