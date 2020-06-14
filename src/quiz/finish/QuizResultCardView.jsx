import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function QuizResultCardView({ questionResult }) {
  const renderOption = (option) => {
    let buttonVariant = 'outline-dark';
    if (option.ID === questionResult.selectedOptionID && !questionResult.isCorrect)
      buttonVariant = 'danger';
    else if (option.ID === questionResult.ID) buttonVariant = 'success';

    return (
      <Button variant={buttonVariant} className="w-100" disabled>
        {option.value}
      </Button>
    );
  };

  return (
    <>
      <Card className="mt-3 mb-3">
        <Card.Header>Question {questionResult.questionNumber}</Card.Header>
        <Card.Body className="text-center pt-0">
          <Card.Title className="mt-2">
            <h2>{questionResult.question}</h2>
          </Card.Title>
          <Row className="mt-3 mb-3">
            <Col sm={6}>{renderOption(questionResult.options[0])}</Col>
            <Col sm={6}>{renderOption(questionResult.options[1])}</Col>
          </Row>
          <Row className="mt-3">
            <Col sm={6}>{renderOption(questionResult.options[2])}</Col>
            <Col sm={6}>{renderOption(questionResult.options[3])}</Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default QuizResultCardView;
