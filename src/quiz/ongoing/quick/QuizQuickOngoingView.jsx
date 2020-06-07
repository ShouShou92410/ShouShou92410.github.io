import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuizQuestion from '../QuizQuestion';

function QuizQuickOngoingView({ currentQuestion, handleAfterConfirm }) {
  return (
    <>
      <Row>
        <Col lg={2} />
        <Col lg={7}>
          <QuizQuestion vocabQuestion={currentQuestion} handleAfterConfirm={handleAfterConfirm} />
        </Col>
        <Col lg={2}>
          <h4>description</h4>
        </Col>
      </Row>
    </>
  );
}

export default QuizQuickOngoingView;
