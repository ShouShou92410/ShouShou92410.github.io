import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../utility/Context';
import { getAllBlogPost } from '../../services/Firebase';
import BlogPostListView from './BlogPostListView';

function BlogPostList() {
  const { currentUser } = useContext(UserContext);

  const [postArray, setPostArray] = useState([]);

  useEffect(() => {
    getAllBlogPost().then((snapshot) => {
      // Object.entries() turns snapshot.val() into [key, value]
      setPostArray(
        Object.entries(snapshot.val() || [])
          .reverse()
          .map((post) => {
            return {
              postID: post[0],
              ...post[1]
            };
          })
      );
    });
  }, []);

  return <BlogPostListView currentUser={currentUser} postArray={postArray} />;
}

export default BlogPostList;
