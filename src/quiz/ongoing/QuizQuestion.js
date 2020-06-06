import React from 'react';
import QuizQuestionView from './QuizQuestionView';

function QuizQuestion({ vocabQuestion, setCurrentQuestion, setQuestionIndex }) {
  const handleConfirm = () => {
    //setCurrentQuestion
  };
  return <QuizQuestionView vocabQuestion={vocabQuestion} />;
}

export default QuizQuestion;
