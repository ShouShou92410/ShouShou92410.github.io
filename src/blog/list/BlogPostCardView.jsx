import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function BlogPostCardView({ post }) {
  return (
    <>
      <Card className="m-3">
        <Card.Header>
          <Row>
            <Col sm={9}>
              <Card.Title className="m-0">{post.title}</Card.Title>
            </Col>
            <Col sm={3}>
              <Card.Subtitle className="m-0 text-muted float-right">
                {post.datePosted}
              </Card.Subtitle>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="pb-1">
          <Card.Text className="mb-0 blog-post-preview">{post.content}</Card.Text>
          <Card.Link
            as={Link}
            to={`/blog/read/${post.postID}`}
            className="dark float-right text-sm">
            read more
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default BlogPostCardView;
