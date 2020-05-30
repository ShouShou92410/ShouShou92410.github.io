import React from 'react';

function BlogPostReadView({ post }) {
  console.log(post);
  return (
    <>
      <h1>{post.title}</h1>
      <hr />
      <p>{post.content}</p>
    </>
  );
}

export default BlogPostReadView;
