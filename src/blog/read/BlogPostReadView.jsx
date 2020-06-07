import React from 'react';
import { Link } from 'react-router-dom';
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
        <Col lg={4}>
          <Row style={{ height: '60%' }}>
            {currentUser && (
              <>
                <Col lg={6}>
                  <Button
                    variant="warning"
                    size="sm"
                    as={Link}
                    to={`/blog/edit/${post.ID}`}
                    className="w-100">
                    Edit
                  </Button>
                </Col>
                <Col lg={6}>
                  <Button variant="danger" size="sm" onClick={handleDelete} className="w-100">
                    Delete
                  </Button>
                </Col>
              </>
            )}
          </Row>
          <Row>
            <Col lg={12} align="right">
              {post.datePosted}
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col lg={8} />
      </Row>
      <p className="mt-2">{post.content}</p>
    </>
  );
}

export default BlogPostReadView;
