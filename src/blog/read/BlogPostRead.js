import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../utility/Context';
import { useHistory } from 'react-router-dom';
import { getBlogPost, deleteBlogPost } from '../../services/Firebase';
import BlogPostReadView from './BlogPostReadView';

function BlogPostRead() {
  const { currentUser } = useContext(UserContext);

  const [ID, setID] = useState(window.location.href.split('/').pop());
  const [post, setPost] = useState({});
  const history = useHistory();

  useEffect(() => {
    getBlogPost(ID).then((snapshot) => {
      setPost({
        ID: ID,
        ...snapshot.val()
      });
    });
  }, []);

  const handleDelete = () => {
    deleteBlogPost(ID);
    setID(null);
    history.push('/blog');
  };

  return <BlogPostReadView currentUser={currentUser} post={post} handleDelete={handleDelete} />;
}

export default BlogPostRead;
