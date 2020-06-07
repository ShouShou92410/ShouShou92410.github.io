import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BlogPostEditView({ formInput, handleFormChange, handleSubmit }) {
  return (
    <>
      <h2>Edit Post</h2>
      <Form className="mt-2" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Post title"
            name="title"
            value={formInput.title}
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
            value={formInput.content}
            onChange={handleFormChange}
          />
        </Form.Group>

        <Button variant="warning" type="submit" className="float-right">
          Edit
        </Button>
      </Form>
    </>
  );
}

export default BlogPostEditView;
