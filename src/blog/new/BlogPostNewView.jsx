import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BlogPostNewView({ handleFormChange, handleSubmit }) {
  return (
    <>
      <h1>Create New Post</h1>
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

        <Form.Group className="float-right">
          <Button variant="secondary" as={Link} to={`/blog`} className="ml-1">
            Cancel
          </Button>
          <Button variant="success" type="submit" className="ml-1">
            Create
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default BlogPostNewView;
