import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import BlogPostCardView from './BlogPostCardView';

function BlogPostListView({ currentUser, posts }) {
  return (
    <>
      <Row>
        <Col lg={10}>
          <h1>Blog</h1>
        </Col>
        {currentUser && (
          <Col lg={2}>
            <Button variant="success" as={Link} to={`/blog/new`} className="mt-1 w-100">
              New Post
            </Button>
          </Col>
        )}
      </Row>
      <hr />
      {posts.map((post) => (
        <BlogPostCardView key={post.ID} post={post} />
      ))}
    </>
  );
}

export default BlogPostListView;
