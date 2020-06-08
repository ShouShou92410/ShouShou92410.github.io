import React, { useState, useEffect } from 'react';
import { getVocabularyQuestion } from '../../../services/Firebase';
import QuizQuickOngoingView from './QuizQuickOngoingView';
import { QuizEnumeration } from '../../../utility/Enumeration';

function QuizQuickOngoing({ quizSetting, setQuizResults, setQuizState }) {
  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState();

  //setCurrentQuestion, with options
  //setResults
  //if last question, setQuizResults with results
  useEffect(() => {
    const fetchQuestion = async () => {
      setQuestions(await getVocabularyQuestion(quizSetting));
    };
    fetchQuestion();
  }, [quizSetting]);

  useEffect(() => {
    if (questions.length > 0 && questionIndex === questions.length) {
      setQuizResults(results);
      setQuizState(QuizEnumeration.State.FINISH);
    } else {
      setCurrentQuestion(questions[questionIndex]);
    }
  }, [questions, questionIndex, results, setQuizResults, setQuizState]);

  const handleNextQuestion = (selectedOptionID) => {
    setResults([...results, { ...currentQuestion, selectedOptionID: selectedOptionID }]);
    setQuestionIndex(questionIndex + 1);
  };

  return (
    (currentQuestion && (
      <QuizQuickOngoingView
        currentQuestion={currentQuestion}
        handleNextQuestion={handleNextQuestion}
      />
    )) || <h1>loading...</h1>
  );
}

export default QuizQuickOngoing;
