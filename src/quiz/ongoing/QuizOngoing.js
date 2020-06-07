import React, { useState, useEffect } from 'react';
import { getVocabularyQuestion } from '../../services/Firebase';
import QuizOngoingView from './QuizOngoingView';

function QuizOngoing({ quizSetting, setQuizResult, setQuizState }) {
  const [questionArray, setQuestionArray] = useState([]);
  const [resultArray, setResultArray] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});

  //setCurrentQuestion, with options
  //setResultArray
  //if last question, setQuizResult with resultArray
  useEffect(() => {
    const fetchQuestion = async () => {
      setQuestionArray(await getVocabularyQuestion(quizSetting));
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
