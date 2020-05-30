import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteBlogPost } from '../../services/Firebase';
import { getBlogPost } from '../../services/Firebase';
import BlogPostReadView from './BlogPostReadView';

function BlogPostRead() {
  const [postID, setPostID] = useState(window.location.href.split('/').pop());
  const [post, setPost] = useState({});
  const history = useHistory();

  useEffect(() => {
    getBlogPost(postID).then((snapshot) => {
      setPost({
        postID: postID,
        ...snapshot.val()
      });
    });
  }, []);

  const handleDelete = () => {
    deleteBlogPost(postID);
    history.push('/blog');
  };

  return <BlogPostReadView post={post} handleDelete={handleDelete} />;
}

export default BlogPostRead;
