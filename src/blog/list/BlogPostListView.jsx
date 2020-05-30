import React from 'react';
import BlogPostCardView from './BlogPostCardView';

function BlogPostListView({ postList }) {
  return (
    <>
      <h1>Blog</h1>
      <hr />
      {postList.map((post) => (
        <BlogPostCardView key={post.postID} post={post} />
      ))}
    </>
  );
}

export default BlogPostListView;
