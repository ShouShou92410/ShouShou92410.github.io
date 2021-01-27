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

    await firebase.getRandomVocabularies();

    console.log(quizSetupForm);
    console.log(quizSetupForm.format);
    updateSession({
      state: Enumeration.JPN_VOCAB_QUIZ_SESSION_STATE.ONGOING,
      format: quizSetupForm.format,
      questions: null
    });
  };

  return (
    <Form className="ml-5 mr-5" onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
      <Form.Group>
        <Form.Label>Quiz Format</Form.Label>
        <Form.Control as="select" name="format">
          {Object.entries(Enumeration.JPN_VOCAB_QUIZ_FORMAT).map(([key, value]) => (
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
