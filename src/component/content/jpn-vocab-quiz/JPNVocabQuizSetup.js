import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Enumeration from '../../../utility/Enumeration';
import { FirebaseContext } from '../../../services/Firebase';

function JPNVocabQuizSetup({ updateSession }) {
  const firebase = useContext(FirebaseContext);

  const [rangeForm, setRangeForm] = useState({});

  const handleRangeClick = (e) => {
    const value = e.target.value;

    const newRangeForm = { ...rangeForm };
    newRangeForm[value] = newRangeForm[value] ? undefined : true;

    setRangeForm(newRangeForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const quizSetupForm = Object.fromEntries(formData.entries());

    const newQuestions = await firebase.getRandomVocabularies(quizSetupForm.questionCount);

    const newSession = {
      state: Enumeration.JPN_VOCAB_QUIZ_SESSION_STATE.ONGOING,
      format: quizSetupForm.format,
      range: Object.entries(rangeForm).reduce((accumulator, [key, value]) => {
        if (value) return [...accumulator, parseInt(key)];
        else return accumulator;
      }, []),
      questions: newQuestions
    };

    console.log(newSession);
    updateSession(newSession);
  };

  return (
    <Form className="ml-5 mr-5" onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
      <Form.Group>
        <Form.Label>Format</Form.Label>
        <Form.Control as="select" name="format">
          {Object.entries(Enumeration.JPN_VOCAB_QUIZ_FORMAT).map(([key, value]) => (
            <option key={key} value={key}>
              {value.label}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Number of Questions</Form.Label>
        <Form.Control as="select" name="questionCount">
          {[5, 10, 15, 20, 25, 30].map((x) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Range</Form.Label>
        <ListGroup style={{ overflow: 'auto', maxHeight: '20vh' }}>
          {Object.values(Enumeration.JPN_VOCAB_QUIZ_RANGE).map(({ label, value }) => (
            <ListGroup.Item
              action
              type="button"
              key={value}
              onClick={handleRangeClick}
              value={value}>
              {label}
              {rangeForm[value] && (
                <Badge variant="success" className="ml-1 mr-1 float-right">
                  Added
                </Badge>
              )}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Form.Group>
      <Form.Group style={{ textAlign: 'center' }}>
        <Button className="pl-5 pr-5" variant="primary" type="submit">
          Start
        </Button>
      </Form.Group>
    </Form>
  );
}

export default JPNVocabQuizSetup;
