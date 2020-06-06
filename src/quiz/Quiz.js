import React, { useState } from 'react';
import QuizInitialization from './initialization/QuizInitialization';
import { QuizEnumeration } from '../utility/Enumeration';

/* Manages quiz settings, question generation, result displays */
function Quiz() {
  const [quizState, setQuizState] = useState(QuizEnumeration.State.INITIALIZATION);
  const [quizSetting, setQuizSetting] = useState({
    mode: QuizEnumeration.Mode.QUICK,
    format: QuizEnumeration.Format.JP_EN
  });

  const renderView = () => {
    switch (quizState) {
      case QuizEnumeration.State.INITIALIZATION:
        return (
          <QuizInitialization
            quizSetting={quizSetting}
            setQuizSetting={setQuizSetting}
            setQuizState={setQuizState}
          />
        );
      case QuizEnumeration.State.ONGOING:
        return;
      case QuizEnumeration.State.FINISH:
        return;
      default:
        return (
          <QuizInitialization
            quizSetting={quizSetting}
            setQuizSetting={setQuizSetting}
            setQuizState={setQuizState}
          />
        );
    }
  };

  return renderView();
}

export default Quiz;
