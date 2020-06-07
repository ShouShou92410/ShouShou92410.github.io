import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { QuizEnumeration } from '../../utility/Enumeration';

function QuizSettingView({ quizSetting, handleFormChange, handleSubmit }) {
  const renderOtherSettingString = () => {
    switch (quizSetting.mode) {
      case QuizEnumeration.Mode.QUICK:
        return 'Total Questions';
      case QuizEnumeration.Mode.SURVIVAL:
        return 'Total Lives';
      default:
        return '';
    }
  };

  return (
    <>
      <Row>
        <Col lg={2} />
        <Col lg={7}>
          <h1>Initial Setup</h1>
          <Form className="mt-4" onSubmit={handleSubmit}>
            <Form.Group as={Row}>
              <Col sm={2} className="text-center">
                <Form.Label className="mt-2">Quiz Mode</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control
                  as="select"
                  name="mode"
                  value={quizSetting.mode}
                  onChange={handleFormChange}>
                  {Object.values(QuizEnumeration.Mode).map((mode) => (
                    <option key={mode}>{mode}</option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={2} className="text-center">
                <Form.Label className="mt-2">Quiz Format</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control
                  as="select"
                  name="format"
                  value={quizSetting.format}
                  onChange={handleFormChange}>
                  {Object.values(QuizEnumeration.Format).map((format) => (
                    <option key={format}>{format}</option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>

            {/* Quick Mode */}
            <Form.Group as={Row}>
              <Col sm={2} className="text-center">
                <Form.Label className="mt-2">{renderOtherSettingString()}</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control
                  as="input"
                  name="total"
                  value={quizSetting.total}
                  onChange={handleFormChange}
                />
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
        </Col>
        <Col lg={2}>
          <h4>Quick mode is... Survival mode is...</h4>
        </Col>
      </Row>
    </>
  );
}

export default QuizSettingView;
