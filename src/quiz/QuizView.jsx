import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuizSetting from './QuizSetting';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';

function QuizView({ modeList }) {
  return (
    <>
      <Row>
        <Col lg={2} />
        <Col lg={7}>
          <QuizSetting />
          <QuizQuestion />
          <QuizResult />
          <QuizResult />
          <QuizResult />
        </Col>
        <Col lg={2}>
          <h4>description</h4>
        </Col>
      </Row>
    </>
  );
}

export default QuizView;
