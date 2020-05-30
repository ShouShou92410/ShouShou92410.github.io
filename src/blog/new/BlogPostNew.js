import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createBlogPost } from '../../services/Firebase';
import { UserContext } from '../../utility/Context';
import BlogPostNewView from './BlogPostNewView';

function BlogPostNew() {
  const { currentUser } = useContext(UserContext);
  const [formInput, setFormInput] = useState({});
  const history = useHistory();

  const handleFormChange = (e) => setFormInput({ ...formInput, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    let error = '';
    if (!formInput.title) error += 'Invalid title.\n';
    if (!formInput.content) error += 'Invalid content.\n';
    if (error) alert(error);
    else {
      createBlogPost(formInput);
      setFormInput({});
      history.push('/blog');
    }
  };

  return (
    currentUser && (
      <BlogPostNewView handleFormChange={handleFormChange} handleSubmit={handleSubmit} />
    )
  );
}

export default BlogPostNew;
