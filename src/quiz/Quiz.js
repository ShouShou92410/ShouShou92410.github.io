import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { QuizEnumeration } from '../utility/Enumeration';
import QuizInitialization from './initialization/QuizInitialization';
import QuizQuickOngoing from './ongoing/QuizQuickOngoing';
import QuizSurvivalOngoing from './ongoing/QuizSurvivalOngoing';
import QuizFinish from './finish/QuizFinish';
import Error from '../utility/Error';

function Quiz() {
  const [quizState, setQuizState] = useState(QuizEnumeration.State.INITIALIZATION);
  const [quizSetting, setQuizSetting] = useState({
    mode: QuizEnumeration.Mode.QUICK,
    format: QuizEnumeration.Format.JPK_EN,
    total: ''
  });
  const [quizResults, setQuizResults] = useState([]);

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
                setQuizResults={setQuizResults}
                setQuizState={setQuizState}
              />
            );
          case QuizEnumeration.Mode.SURVIVAL:
            return (
              <QuizSurvivalOngoing
                quizSetting={quizSetting}
                setQuizResults={setQuizResults}
                setQuizState={setQuizState}
              />
            );
          default:
            return <Error />;
        }
      case QuizEnumeration.State.FINISH:
        return <QuizFinish quizResults={quizResults} setQuizState={setQuizState} />;
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

  return (
    <>
      <Row>
        <Col lg={2} />
        <Col lg={7}>{renderView()}</Col>
        <Col lg={2}>{/* <h4>description</h4> */}</Col>
      </Row>
    </>
  );
}

export default Quiz;
