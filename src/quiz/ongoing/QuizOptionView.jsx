import React from 'react';
import Button from 'react-bootstrap/Button';

function QuizOptionView({ option, selectedOptionID, isCorrect, handleOptionSelect }) {
  return (
    <Button
      variant={selectedOptionID === option.ID ? 'dark' : 'outline-dark'}
      className="w-100"
      disabled={isCorrect !== null}
      value={option.ID}
      onClick={handleOptionSelect}>
      {option.value} ({option.partofspeech})
    </Button>
  );
}

export default QuizOptionView;
