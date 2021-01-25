import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import JPNVocabQuizSetup from './JPNVocabQuizSetup';
import JPNVocabQuizOngoing from './JPNVocabQuizOngoing';
import JPNVocabQuizResult from './JPNVocabQuizResult';
import Enumeration from '../../../utility/Enumeration';

function JPNVocabQuiz() {
  const [session, setSession] = useState({
    state: Enumeration.JPN_VOCAB_QUIZ_SESSION_STATE.INITIALIZATION,
    format: null,
    questions: null
  });
  const updateSession = (newSession) =>
    setSession({
      state: newSession.state,
      format: newSession.format,
      questions: newSession.questions
    });

  const renderSessionContent = () => {
    switch (session.state) {
      case Enumeration.JPN_VOCAB_QUIZ_SESSION_STATE.INITIALIZATION:
        return <JPNVocabQuizSetup updateSession={updateSession} />;
      case Enumeration.JPN_VOCAB_QUIZ_SESSION_STATE.ONGOING:
        return <JPNVocabQuizOngoing updateSession={updateSession} />;
      case Enumeration.JPN_VOCAB_QUIZ_SESSION_STATE.FINISH:
        return <JPNVocabQuizResult updateSession={updateSession} />;
      default:
        return <JPNVocabQuizSetup updateSession={updateSession} />;
    }
  };

  return (
    <Card className="content-card height-fill">
      <Card.Body>
        <Card.Title>
          <h1>Japanese Vocab Quiz</h1>
        </Card.Title>
        <Container>
          {session.state === Enumeration.JPN_VOCAB_QUIZ_SESSION_STATE.INITIALIZATION && (
            <Card.Text>des</Card.Text>
          )}
          {renderSessionContent()}
        </Container>
      </Card.Body>
    </Card>
  );
}

export default JPNVocabQuiz;
