import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuizQuestion from './QuizQuestion';

function QuizOngoingView({ currentQuestion, setCurrentQuestion, setQuestionIndex }) {
  return (
    <>
      <Row>
        <Col lg={2} />
        <Col lg={7}>
          <QuizQuestion
            vocabQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            setQuestionIndex={setQuestionIndex}
          />
        </Col>
        <Col lg={2}>
          <h4>description</h4>
        </Col>
      </Row>
    </>
  );
}

export default QuizOngoingView;
