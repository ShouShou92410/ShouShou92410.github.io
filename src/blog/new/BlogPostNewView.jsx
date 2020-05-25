import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BlogPostNewView({ handleFormChange, handleSubmit }) {
  return (
    <>
      <Form className="mt-2" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Post title"
            name="title"
            onChange={handleFormChange}
          />
        </Form.Group>

        <hr />

        <Form.Group>
          <Form.Control
            as="textarea"
            rows="10"
            placeholder="Post content"
            name="content"
            onChange={handleFormChange}
          />
        </Form.Group>

        <Button variant="success" type="submit" className="float-right">
          Create
        </Button>
      </Form>
    </>
  );
}

export default BlogPostNewView;
