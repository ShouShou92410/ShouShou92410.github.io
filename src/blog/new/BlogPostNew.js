import React, { useContext, useState } from 'react';
import { createBlogPost } from '../../services/Firebase';
import { UserContext } from '../../utility/Context';
import BlogPostNewView from './BlogPostNewView';

function BlogPostNew() {
  const { currentUser } = useContext(UserContext);
  const [formInput, setFormInput] = useState({});

  const handleFormChange = (e) => setFormInput({ ...formInput, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createBlogPost(formInput);
    setFormInput({});
  };

  return (
    currentUser && (
      <BlogPostNewView handleFormChange={handleFormChange} handleSubmit={handleSubmit} />
    )
  );
}

export default BlogPostNew;
