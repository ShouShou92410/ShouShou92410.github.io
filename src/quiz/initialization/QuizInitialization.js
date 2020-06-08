import React, { useEffect } from 'react';
import { QuizEnumeration } from '../../utility/Enumeration';
import QuizInitializationView from './QuizInitializationView';

function QuizInitialization({ quizSetting, setQuizSetting, setQuizState }) {
  useEffect(() => {
    setQuizSetting({
      mode: QuizEnumeration.Mode.QUICK,
      format: QuizEnumeration.Format.JPK_EN,
      total: ''
    });
  }, [setQuizSetting]);

  const validateFormInput = () => {
    const regex = /^[0-9\b]+$/;

    if (!regex.test(quizSetting.total) || quizSetting.total < 0) {
      switch (quizSetting.mode) {
        case QuizEnumeration.Mode.QUICK:
          alert('Please enter a number greater than 0 for Total Questions.');
          return false;
        case QuizEnumeration.Mode.SURVIVAL:
          alert('Please enter a number greater than 0 for Total Lives.');
          return false;
        default:
          alert('');
          return false;
      }
    }

    return true;
  };

  const handleFormChange = (e) =>
    setQuizSetting({ ...quizSetting, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateFormInput()) return;

    setQuizState(QuizEnumeration.State.ONGOING);
  };

  return (
    <QuizInitializationView
      quizSetting={quizSetting}
      handleFormChange={handleFormChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default QuizInitialization;
