import React, { useContext } from 'react';
import { UserContext } from '../../utility/Context';
import BlogPostEditView from './BlogPostEditView';

function BlogPostEdit() {
  const { currentUser } = useContext(UserContext);

  return currentUser && <BlogPostEditView />;
}

export default BlogPostEdit;
