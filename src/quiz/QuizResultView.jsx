import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function QuizResultView() {
  return (
    <>
      {/* Card border, show/hide alerts */}
      <Card border="danger" className="width-75 mt-2 mb-2">
        <Card.Header>Question 1</Card.Header>
        <Card.Body className="text-center pt-0">
          <Card.Title className="mt-2">
            <h2>あか</h2>
          </Card.Title>
          <Row className="mt-3 mb-3">
            <Col sm={6}>
              <Button variant="outline-dark" block>
                Red
              </Button>
            </Col>
            <Col sm={6}>
              <Button variant="outline-dark" block>
                Blue
              </Button>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={6}>
              <Button variant="outline-dark" block>
                Yellow
              </Button>
            </Col>
            <Col sm={6}>
              <Button variant="outline-dark" block>
                Green
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default QuizResultView;
