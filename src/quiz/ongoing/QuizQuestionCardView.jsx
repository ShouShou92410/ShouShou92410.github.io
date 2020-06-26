import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import QuizOptionView from './QuizOptionView';

function QuizQuestionCardView({
  vocabQuestion,
  selectedOptionID,
  isCorrect,
  handleOptionSelect,
  handleConfirm,
  handleNext
}) {
  const renderResultAlert = (isCorrect) => (
    <Alert variant={isCorrect ? 'success' : 'danger'}>
      <Row>
        <Col />
        <Col>
          <h3>{isCorrect ? 'CORRECT' : 'WRONG'}</h3>
        </Col>
        <Col>
          <Button
            variant={isCorrect ? 'outline-success' : 'outline-danger'}
            className="float-right"
            onClick={handleNext}>
            Next
          </Button>
        </Col>
      </Row>
    </Alert>
  );

  return (
    <>
      <Card className="mt-3 mb-3">
        <Card.Header>Question {vocabQuestion.questionNumber}</Card.Header>
        <Card.Body className="text-center">
          <Card.Title className="mt-3 mb-5">
            <h1>
              {vocabQuestion.question}{' '}
              {vocabQuestion.partofspeech && `(${vocabQuestion.partofspeech})`}
            </h1>
          </Card.Title>
          <div className="mt-5 mb-3">
            <Row className="m-3">
              <Col sm={3} />
              <Col sm={3}>
                <QuizOptionView
                  option={vocabQuestion.options[0]}
                  selectedOptionID={selectedOptionID}
                  isCorrect={isCorrect}
                  handleOptionSelect={handleOptionSelect}
                />
              </Col>
              <Col sm={3}>
                <QuizOptionView
                  option={vocabQuestion.options[1]}
                  selectedOptionID={selectedOptionID}
                  isCorrect={isCorrect}
                  handleOptionSelect={handleOptionSelect}
                />
              </Col>
              <Col sm={3} />
            </Row>
            <Row className="m-3">
              <Col sm={3} />
              <Col sm={3}>
                <QuizOptionView
                  option={vocabQuestion.options[2]}
                  selectedOptionID={selectedOptionID}
                  isCorrect={isCorrect}
                  handleOptionSelect={handleOptionSelect}
                />
              </Col>
              <Col sm={3}>
                <QuizOptionView
                  option={vocabQuestion.options[3]}
                  selectedOptionID={selectedOptionID}
                  isCorrect={isCorrect}
                  handleOptionSelect={handleOptionSelect}
                />
              </Col>
              <Col sm={3} />
            </Row>
          </div>
          {isCorrect === null ? (
            <Row className="m-3">
              <Col sm={3} />
              <Col sm={6}>
                <Button
                  variant="secondary"
                  block
                  onClick={() => {
                    handleConfirm();
                  }}>
                  Confirm
                </Button>
              </Col>
              <Col sm={3} />
            </Row>
          ) : (
            renderResultAlert(isCorrect)
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default QuizQuestionCardView;
