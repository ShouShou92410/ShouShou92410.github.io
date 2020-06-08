import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../utility/Context';
import { getAllBlogPost } from '../../services/Firebase';
import BlogPostListView from './BlogPostListView';

function BlogPostList() {
  const { currentUser } = useContext(UserContext);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllBlogPost = async () => {
      setPosts((await getAllBlogPost()).reverse());
    };
    fetchAllBlogPost();
  }, []);

  return <BlogPostListView currentUser={currentUser} posts={posts} />;
}

export default BlogPostList;
