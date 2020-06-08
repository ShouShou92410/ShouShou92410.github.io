import React from 'react';
import QuizQuestionCard from '../QuizQuestionCard';

function QuizQuickOngoingView({ currentQuestion, handleNextQuestion }) {
  return (
    <>
      <h1>Quiz in progress...</h1>
      <hr />
      <QuizQuestionCard vocabQuestion={currentQuestion} handleNextQuestion={handleNextQuestion} />
    </>
  );
}

export default QuizQuickOngoingView;
