import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../utility/Context';
import { useHistory } from 'react-router-dom';
import { deleteBlogPost } from '../../services/Firebase';
import { getBlogPost } from '../../services/Firebase';
import BlogPostReadView from './BlogPostReadView';

function BlogPostRead() {
  const { currentUser } = useContext(UserContext);

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

  return <BlogPostReadView currentUser={currentUser} post={post} handleDelete={handleDelete} />;
}

export default BlogPostRead;
