import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function BlogPostCardView() {
  const blogPostID = 123;
  return (
    <>
      <Card className="m-3">
        <Card.Header>
          <Row>
            <Col sm={9}>
              <Card.Title className="m-0">Blog Post Title</Card.Title>
            </Col>
            <Col sm={3}>
              <Card.Subtitle className="m-0 text-muted float-right">2020/01/31</Card.Subtitle>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="pb-1">
          <Card.Text className="mb-0 blog-post-preview">
            Limit the text to only 3 lines in preview. <br />
            line 2. <br />
            line 3. <br />
            line 4, which you shouldn't be able to see.
          </Card.Text>
          <Card.Link as={Link} to={`/blog/${blogPostID}`} className="dark float-right text-sm">
            read more
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default BlogPostCardView;
