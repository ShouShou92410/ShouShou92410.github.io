import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BlogPostEditView() {
  return (
    <>
      <Form className="mt-2">
        <Form.Group>
          <Form.Control size="lg" type="text" placeholder="Post title" />
        </Form.Group>

        <hr />

        <Form.Group>
          <Form.Control as="textarea" rows="10" placeholder="Post content" />
        </Form.Group>

        <Button variant="warning" type="submit" className="float-right">
          Edit
        </Button>
      </Form>
    </>
  );
}

export default BlogPostEditView;
