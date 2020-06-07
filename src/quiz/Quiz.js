import React, { useState } from 'react';
import { QuizEnumeration } from '../utility/Enumeration';
import QuizInitialization from './initialization/QuizInitialization';
import QuizQuickOngoing from './ongoing/quick/QuizQuickOngoing';

function Quiz() {
  const [quizState, setQuizState] = useState(QuizEnumeration.State.INITIALIZATION);
  const [quizSetting, setQuizSetting] = useState({
    mode: QuizEnumeration.Mode.QUICK,
    format: QuizEnumeration.Format.JPK_EN,
    total: ''
  });
  const [quizResult, setQuizResult] = useState([]);

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
        switch (quizSetting.mode) {
          case QuizEnumeration.Mode.QUICK:
            return (
              <QuizQuickOngoing
                quizSetting={quizSetting}
                setQuizResult={setQuizResult}
                setQuizState={setQuizState}
              />
            );
          case QuizEnumeration.Mode.SURVIVAL:
            return (
              <QuizQuickOngoing
                quizSetting={quizSetting}
                setQuizResult={setQuizResult}
                setQuizState={setQuizState}
              />
            );
          default:
            return;
        }
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
