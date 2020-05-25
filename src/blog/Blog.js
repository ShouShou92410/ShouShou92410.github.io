import React, { useContext } from 'react';
import { UserContext } from '../utility/Context';
import BlogView from './BlogView';

function Blog() {
  const { currentUser } = useContext(UserContext);

  return <BlogView currentUser={currentUser} />;
}

export default Blog;
