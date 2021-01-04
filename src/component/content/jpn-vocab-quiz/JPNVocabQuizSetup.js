import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Enumeration from '../../../utility/Enumeration';

function JPNVocabQuizSetup() {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Quiz Format</Form.Label>
        <Form.Control as="select" name="format">
          {Object.values(Enumeration.JPN_VOCAB_QUIZ_FORMAT).map((format) => (
            <option key={format.value}>{format.label}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default JPNVocabQuizSetup;
