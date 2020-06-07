import React, { useState } from 'react';
import QuizQuestionView from './QuizQuestionView';

function QuizQuestion({ vocabQuestion, handleAfterConfirm }) {
  const [selectedOptionID, setSelectedOptionID] = useState('');
  const handleOptionSelect = (e) => {
    setSelectedOptionID(e.target.value);
  };

  const handleConfirm = () => {
    if (vocabQuestion.ID === selectedOptionID) console.log('CORRECT!');
    else console.log('WRONG!');
    handleAfterConfirm(selectedOptionID);
    setSelectedOptionID('');
  };

  return (
    <QuizQuestionView
      vocabQuestion={vocabQuestion}
      handleOptionSelect={handleOptionSelect}
      handleConfirm={handleConfirm}
    />
  );
}

export default QuizQuestion;
