import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function QuizSettingView() {
  return (
    <>
      <h1>Quick Mode</h1>
      <p>Quick mode description</p>
      <Form className="mt-4">
        <Form.Group as={Row}>
          <Col sm={2} className="text-center">
            <Form.Label className="mt-2">Quiz Mode</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control as="select" name="mode">
              <option>Quick</option>
              <option>Manual</option>
              <option>Survival</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={2} className="text-center">
            <Form.Label className="mt-2">Quiz Format</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control as="select" name="format">
              {/* JP → US */}
              <option>&#x1f1ef;&#x1f1f5; → &#x1F1FA;&#x1F1F8;</option>
              {/* JP → TW */}
              <option>&#x1f1ef;&#x1f1f5; → &#x1F1F9;&#x1F1FC;</option>
              {/* US → JP */}
              <option>&#x1F1FA;&#x1F1F8; → &#x1f1ef;&#x1f1f5;</option>
              {/* TW → JP */}
              <option>&#x1F1F9;&#x1F1FC; → &#x1f1ef;&#x1f1f5;</option>
            </Form.Control>
          </Col>
        </Form.Group>

        {/* Quick Mode */}
        <Form.Group as={Row}>
          <Col sm={2} className="text-center">
            <Form.Label className="mt-2">Total Question</Form.Label>
          </Col>
          <Col sm={10}>
            {/* Only accepts int, https://stackoverflow.com/questions/43067719/how-to-allow-only-numbers-in-textbox-in-reactjs */}
            <Form.Control as="input" />
          </Col>
        </Form.Group>

        {/* Manual Mode, might be too hard to create a selection list */}

        {/* Survival Mode */}
        <Form.Group as={Row}>
          <Col sm={2} className="text-center">
            <Form.Label className="mt-2">Total Lives</Form.Label>
          </Col>
          <Col sm={10}>
            {/* Only accepts int, https://stackoverflow.com/questions/43067719/how-to-allow-only-numbers-in-textbox-in-reactjs */}
            <Form.Control as="input" />
          </Col>
        </Form.Group>
        <Row>
          <Col sm={4} />
          <Col sm={4} className="text-center">
            <Button variant="success" type="submit" block>
              Start
            </Button>
          </Col>
          <Col sm={4} />
        </Row>
      </Form>
    </>
  );
}

export default QuizSettingView;
