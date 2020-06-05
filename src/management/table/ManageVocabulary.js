import React, { useState } from 'react';
import { insertVocabulary } from '../../services/Firebase';
import ManageVocabularyView from './ManageVocabularyView';
import FileHelper from '../../utility/FileHelper';

function ManageVocabulary() {
  const [fileInput, setFileInput] = useState({ name: 'No file chosen' });

  const handleFileChange = (e) => setFileInput(e.target.files[0] || { name: 'No file chosen' });
  const handleInsert = async (e) => {
    e.preventDefault();

    if (FileHelper.hasFileExtension(fileInput, 'csv')) {
      const jsonResult = await FileHelper.CSVtoJSON(fileInput);
      jsonResult.forEach((Vocabulary) => insertVocabulary(Vocabulary));
    } else {
      alert('Please provide a csv file.');
    }

    setFileInput({ name: 'No file chosen' });
  };

  return (
    <ManageVocabularyView
      fileInput={fileInput}
      handleFileChange={handleFileChange}
      handleInsert={handleInsert}
    />
  );
}

export default ManageVocabulary;
