import React, { useEffect, useState } from 'react';
import { getAllBlogPost } from '../../services/Firebase';
import BlogPostListView from './BlogPostListView';

function BlogPostList() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    getAllBlogPost().then((snapshot) => {
      // Object.entries() turns snapshot.val() into [key, value]
      setPostList(
        Object.entries(snapshot.val())
          .reverse()
          .map((post) => {
            return {
              key: post[0],
              ...post[1]
            };
          })
      );
    });
  }, []);

  return <BlogPostListView postList={postList} />;
}

export default BlogPostList;
