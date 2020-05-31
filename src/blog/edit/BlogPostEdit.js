import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../utility/Context';
import { getBlogPost, editBlogPost } from '../../services/Firebase';
import BlogPostEditView from './BlogPostEditView';

function BlogPostEdit() {
  const { currentUser } = useContext(UserContext);

  const [postID, setPostID] = useState(window.location.href.split('/').pop());
  const [formInput, setFormInput] = useState({});
  const history = useHistory();

  useEffect(() => {
    getBlogPost(postID).then((snapshot) => {
      setFormInput({
        postID: postID,
        ...snapshot.val()
      });
    });
  }, []);

  const handleFormChange = (e) => setFormInput({ ...formInput, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    let error = '';
    if (!formInput.title) error += 'Invalid title.\n';
    if (!formInput.content) error += 'Invalid content.\n';
    if (error) alert(error);
    else {
      editBlogPost({ id: postID, ...formInput });
      setFormInput({});
      setPostID(null);
      history.push('/blog');
    }
  };

  return (
    currentUser && (
      <BlogPostEditView
        formInput={formInput}
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
      />
    )
  );
}

export default BlogPostEdit;
