import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

function BlogView() {
  return (
    <>
      <Row>
        <Col lg={2} />
        <Col lg={7}>
          <h1>Blog Content</h1>
          <Alert variant={'warning'} className="text-center mt-2">
            <Alert.Heading>This page is still under construction.</Alert.Heading>
          </Alert>
        </Col>
      </Row>
    </>
  );
}

export default BlogView;
