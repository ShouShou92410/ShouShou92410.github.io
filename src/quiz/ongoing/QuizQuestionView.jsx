import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function QuizQuestionView({ vocabQuestion }) {
  return (
    <>
      {/* Card border, show/hide alerts */}
      <Card border="danger">
        <Card.Header>Question 1</Card.Header>
        <Card.Body className="text-center">
          <Card.Title className="mt-3 mb-5">
            <h1>あか</h1>
          </Card.Title>
          <div className="mt-5 mb-3">
            <Row className="m-3">
              <Col sm={3} />
              <Col sm={3}>
                <Button variant="outline-dark" block>
                  Red
                </Button>
              </Col>
              <Col sm={3}>
                <Button variant="outline-dark" block>
                  Blue
                </Button>
              </Col>
              <Col sm={3} />
            </Row>
            <Row className="m-3">
              <Col sm={3} />
              <Col sm={3}>
                <Button variant="outline-dark" block>
                  Yellow
                </Button>
              </Col>
              <Col sm={3}>
                <Button variant="outline-dark" block>
                  Green
                </Button>
              </Col>
              <Col sm={3} />
            </Row>
          </div>
          <Row className="m-3">
            <Col sm={3} />
            <Col sm={6}>
              <Button variant="secondary" block>
                Confirm
              </Button>
            </Col>
            <Col sm={3} />
          </Row>
          <Alert variant="danger">
            <Row>
              <Col />
              <Col>
                <h3>WRONG</h3>
              </Col>
              <Col>
                <Button variant="outline-danger" className="float-right">
                  Next
                </Button>
              </Col>
            </Row>
          </Alert>
          <Alert variant="success">
            <Row>
              <Col />
              <Col>
                <h3>CORRECT</h3>
              </Col>
              <Col>
                <Button variant="outline-success" className="float-right">
                  Next
                </Button>
              </Col>
            </Row>
          </Alert>
        </Card.Body>
      </Card>
    </>
  );
}

export default QuizQuestionView;
