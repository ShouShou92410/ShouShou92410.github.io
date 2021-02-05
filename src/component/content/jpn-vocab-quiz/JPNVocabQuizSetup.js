import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Enumeration from '../../../utility/Enumeration';
import { FirebaseContext } from '../../../services/Firebase';

function JPNVocabQuizSetup({ updateSession }) {
  const firebase = useContext(FirebaseContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const quizSetupForm = Object.fromEntries(formData.entries());

    const newQuestions = await firebase.getRandomVocabularyQuestions(quizSetupForm);

    const newSession = {
      state: Enumeration.JPN_VOCAB_QUIZ_SESSION_STATE.ONGOING,
      format: quizSetupForm.format,
      range: quizSetupForm.range,
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
        <Form.Control as="select" name="count">
          {[5, 10, 15, 20, 25, 30].map((x) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Range</Form.Label>
        <Form.Control as="select" name="range">
          {Object.entries(Enumeration.JPN_VOCAB_QUIZ_RANGE).map(([key, value]) => (
            <option key={key} value={key}>
              {value.label}
            </option>
          ))}
        </Form.Control>
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
