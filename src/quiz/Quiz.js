import React from 'react';
import QuizView from './QuizView';

function Quiz() {
  const modeList = ['quick', 'manual', 'survival'];
  /* Manages quiz settings, question generation, result displays */

  return <QuizView modeList={modeList} />;
}

export default Quiz;
