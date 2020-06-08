import React from 'react';
import { QuizEnumeration } from '../../utility/Enumeration';
import QuizFinishView from './QuizFinishView';

function QuizFinish({ quizResults, setQuizState }) {
  const handleAgain = () => setQuizState(QuizEnumeration.State.INITIALIZATION);

  return <QuizFinishView quizResults={quizResults} handleAgain={handleAgain} />;
}

export default QuizFinish;
