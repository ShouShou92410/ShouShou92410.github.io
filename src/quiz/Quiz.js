import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { QuizEnumeration } from '../utility/Enumeration';
import QuizInitialization from './initialization/QuizInitialization';
import QuizQuickOngoing from './ongoing/QuizQuickOngoing';
import QuizOngoingSidePanelView from './ongoing/QuizOngoingSidePanelView';
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

  const [quizContentElement, setQuizContentElement] = useState();
  const [quizDescriptionElement, setQuizDescriptionElement] = useState();

  useEffect(() => {
    switch (quizState) {
      case QuizEnumeration.State.INITIALIZATION:
        setQuizContentElement(
          <QuizInitialization
            quizSetting={quizSetting}
            setQuizSetting={setQuizSetting}
            setQuizState={setQuizState}
          />
        );
        setQuizDescriptionElement();
        break;
      case QuizEnumeration.State.ONGOING:
        switch (quizSetting.mode) {
          case QuizEnumeration.Mode.QUICK:
            setQuizContentElement(
              <QuizQuickOngoing
                quizSetting={quizSetting}
                setQuizResults={setQuizResults}
                setQuizState={setQuizState}
              />
            );
            break;
          case QuizEnumeration.Mode.SURVIVAL:
            setQuizContentElement(
              <QuizSurvivalOngoing
                quizSetting={quizSetting}
                setQuizResults={setQuizResults}
                setQuizState={setQuizState}
              />
            );
            break;
          default:
            setQuizContentElement(<Error />);
            break;
        }
        setQuizDescriptionElement(<QuizOngoingSidePanelView />);
        break;
      case QuizEnumeration.State.FINISH:
        setQuizContentElement(<QuizFinish quizResults={quizResults} setQuizState={setQuizState} />);
        setQuizDescriptionElement();
        break;
      default:
        setQuizContentElement(
          <QuizInitialization
            quizSetting={quizSetting}
            setQuizSetting={setQuizSetting}
            setQuizState={setQuizState}
          />
        );
        setQuizDescriptionElement();
        break;
    }
  }, [quizState, quizSetting, quizResults]);

  return (
    <>
      <Row>
        <Col lg={2} />
        <Col lg={7}>{quizContentElement}</Col>
        <Col lg={2}>{quizDescriptionElement}</Col>
      </Row>
    </>
  );
}

export default Quiz;
