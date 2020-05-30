import React, { useState, useEffect } from 'react';
import { getBlogPost } from '../../services/Firebase';
import BlogPostReadView from './BlogPostReadView';

function BlogPostRead() {
  const [post, setPost] = useState({});

  useEffect(() => {
    let postID = window.location.href.split('/').pop();

    getBlogPost(postID).then((snapshot) => {
      setPost({
        postID: postID,
        ...snapshot.val()
      });
    });
  }, []);

  return <BlogPostReadView post={post} />;
}

export default BlogPostRead;
