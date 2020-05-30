import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../utility/Context';
import { getAllBlogPost } from '../../services/Firebase';
import BlogPostListView from './BlogPostListView';

function BlogPostList() {
  const { currentUser } = useContext(UserContext);

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getAllBlogPost().then((snapshot) => {
      // Object.entries() turns snapshot.val() into [key, value]
      setPostList(
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

  return <BlogPostListView currentUser={currentUser} postList={postList} />;
}

export default BlogPostList;
