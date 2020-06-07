import React, { useState, useEffect } from 'react';
import { getVocabularyQuestion } from '../../services/Firebase';
import QuizOngoingView from './QuizOngoingView';

function QuizOngoing({ quizSetting, setQuizResult, setQuizState }) {
  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});

  //setCurrentQuestion, with options
  //setResults
  //if last question, setQuizResult with results
  useEffect(() => {
    const fetchQuestion = async () => {
      console.log(await getVocabularyQuestion(quizSetting));
      setQuestions(await getVocabularyQuestion(quizSetting));
    };
    fetchQuestion();
  }, []);

  return (
    <QuizOngoingView
      currentQuestion={currentQuestion}
      setCurrentQuestion={setCurrentQuestion}
      setQuestionIndex={setQuestionIndex}
    />
  );
}

export default QuizOngoing;
