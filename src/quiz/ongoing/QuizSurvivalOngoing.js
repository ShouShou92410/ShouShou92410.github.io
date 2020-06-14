import React, { useState, useEffect } from 'react';
import { getVocabularyQuestion } from '../../services/Firebase';
import QuizOngoingView from './QuizOngoingView';
import { QuizEnumeration } from '../../utility/Enumeration';

function QuizSurvivalOngoing({ quizSetting, setQuizResults, setQuizState }) {
  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [lives, setLives] = useState(quizSetting.total);

  useEffect(() => {
    const fetchQuestion = async () => {
      setQuestions(await getVocabularyQuestion(quizSetting));
    };
    fetchQuestion();
  }, [quizSetting]);

  useEffect(() => {
    if (lives < 1 || (questions.length > 0 && questionIndex === questions.length)) {
      setQuizResults(results);
      setQuizState(QuizEnumeration.State.FINISH);
    } else {
      setCurrentQuestion(questions[questionIndex]);
    }
  }, [lives, questions, questionIndex, results, setQuizResults, setQuizState]);

  const handleNextQuestion = (selectedOptionID) => {
    const isCorrect = selectedOptionID === currentQuestion.ID;
    if (!isCorrect) setLives(lives - 1);
    setResults([
      ...results,
      { ...currentQuestion, selectedOptionID: selectedOptionID, isCorrect: isCorrect }
    ]);
    setQuestionIndex(questionIndex + 1);
  };

  return (
    (currentQuestion && (
      <QuizOngoingView currentQuestion={currentQuestion} handleNextQuestion={handleNextQuestion} />
    )) || <h1>loading...</h1>
  );
}

export default QuizSurvivalOngoing;
