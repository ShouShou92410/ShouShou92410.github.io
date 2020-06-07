import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../utility/Context';
import { getAllBlogPost } from '../../services/Firebase';
import BlogPostListView from './BlogPostListView';

function BlogPostList() {
  const { currentUser } = useContext(UserContext);

  const [postArray, setPostArray] = useState([]);

  useEffect(() => {
    const fetchAllBlogPost = async () => {
      setPostArray((await getAllBlogPost()).reverse());
    };
    fetchAllBlogPost();
  }, []);

  return <BlogPostListView currentUser={currentUser} postArray={postArray} />;
}

export default BlogPostList;
