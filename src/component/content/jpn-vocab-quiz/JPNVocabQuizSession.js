import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import JPNVocabQuizSetup from './JPNVocabQuizSetup';
import JPNVocabQuizOngoing from './JPNVocabQuizOngoing';
import JPNVocabQuizResult from './JPNVocabQuizResult';
import Enumeration from '../../../utility/Enumeration';

function JPNVocabQuizSession() {
  const [sessionState, setSessionState] = useState(
    Enumeration.JPN_VOCAB_QUIZ_SESSION_STATE.INITIALIZATION
  );
  const renderSessionContent = () => {
    switch (sessionState) {
      case Enumeration.JPN_VOCAB_QUIZ_SESSION_STATE.INITIALIZATION:
        return <JPNVocabQuizSetup />;
      case Enumeration.JPN_VOCAB_QUIZ_SESSION_STATE.ONGOING:
        return <JPNVocabQuizOngoing />;
      case Enumeration.JPN_VOCAB_QUIZ_SESSION_STATE.FINISH:
        return <JPNVocabQuizResult />;
      default:
        return <JPNVocabQuizSetup />;
    }
  };
  return <Container>{renderSessionContent()}</Container>;
}

export default JPNVocabQuizSession;
