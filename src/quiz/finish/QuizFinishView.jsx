import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import QuizResultCardView from './QuizResultCardView';

function QuizFinishView({ quizResults, handleAgain }) {
  return (
    <>
      <Row>
        <Col lg={10}>
          <h1>Let's see how you did!</h1>
        </Col>
        {
          <Col lg={2}>
            <Button variant="success" className="mt-1 w-100" onClick={handleAgain}>
              Again!
            </Button>
          </Col>
        }
      </Row>
      <hr />
      {quizResults.map((questionResult) => (
        <QuizResultCardView key={questionResult.ID} questionResult={questionResult} />
      ))}
    </>
  );
}

export default QuizFinishView;
