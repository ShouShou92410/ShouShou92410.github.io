import React from 'react';
import BlogPostCardView from './BlogPostCardView';

function BlogPostListView() {
  return (
    <>
      <h1>Blog</h1>
      <hr />
      <BlogPostCardView />
      <BlogPostCardView />
      <BlogPostCardView />
      <BlogPostCardView />
    </>
  );
}

export default BlogPostListView;
