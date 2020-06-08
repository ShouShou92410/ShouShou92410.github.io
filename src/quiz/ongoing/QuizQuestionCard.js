import React, { useState } from 'react';
import QuizQuestionCardView from './QuizQuestionCardView';

function QuizQuestionCard({ vocabQuestion, handleNextQuestion }) {
  const [selectedOptionID, setSelectedOptionID] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionSelect = (e) => {
    setSelectedOptionID(e.target.value);
  };

  const handleConfirm = () => {
    if (!selectedOptionID) {
      alert('Please pick an answer first.');
      return;
    }
    if (vocabQuestion.ID === selectedOptionID) setIsCorrect(true);
    else setIsCorrect(false);
  };

  const handleNext = () => {
    handleNextQuestion(selectedOptionID);
    setSelectedOptionID('');
    setIsCorrect(null);
  };

  return (
    <QuizQuestionCardView
      vocabQuestion={vocabQuestion}
      selectedOptionID={selectedOptionID}
      isCorrect={isCorrect}
      handleOptionSelect={handleOptionSelect}
      handleConfirm={handleConfirm}
      handleNext={handleNext}
    />
  );
}

export default QuizQuestionCard;
