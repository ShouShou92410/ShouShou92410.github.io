import React, { useState, useEffect } from 'react';
import { getVocabularyQuestion } from '../../../services/Firebase';
import QuizQuickOngoingView from './QuizQuickOngoingView';
import { QuizEnumeration } from '../../../utility/Enumeration';

function QuizQuickOngoing({ quizSetting, setQuizResult, setQuizState }) {
  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState();

  //setCurrentQuestion, with options
  //setResults
  //if last question, setQuizResult with results
  useEffect(() => {
    const fetchQuestion = async () => {
      setQuestions(await getVocabularyQuestion(quizSetting));
    };
    fetchQuestion();
  }, []);

  useEffect(() => {
    if (questions.length > 0 && questionIndex === questions.length) {
      setQuizResult(results);
      setQuizState(QuizEnumeration.State.FINISH);
    } else {
      setCurrentQuestion(questions[questionIndex]);
    }
  }, [questions, questionIndex]);

  const handleAfterConfirm = (selectedOptionID) => {
    setResults([...results, { ...currentQuestion, selectedOptionID: selectedOptionID }]);
    setQuestionIndex(questionIndex + 1);
  };

  return (
    (currentQuestion && (
      <QuizQuickOngoingView
        currentQuestion={currentQuestion}
        handleAfterConfirm={handleAfterConfirm}
      />
    )) || <h1>loading...</h1>
  );
}

export default QuizQuickOngoing;
