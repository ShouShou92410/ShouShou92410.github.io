import React, { useState } from 'react';
import { createVocabulary } from '../../services/Firebase';
import ManageVocabularyView from './ManageVocabularyView';

function ManageVocabulary() {
  const [formInput, setFormInput] = useState({});

  const handleFormChange = (e) => setFormInput({ ...formInput, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createVocabulary(formInput);
    setFormInput({});
  };

  return (
    <ManageVocabularyView
      formInput={formInput}
      handleFormChange={handleFormChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default ManageVocabulary;
