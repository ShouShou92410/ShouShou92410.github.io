import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import JPNVocabQuizSession from './JPNVocabQuizSession';

function JPNVocabQuiz() {
  const [sessionStart, setSessionStart] = useState(false);
  const handleStart = () => setSessionStart(true);

  return (
    <Card className="content-card height-fill">
      <Card.Body>
        <Card.Title>
          <h1>Japanese Vocab Quiz</h1>
        </Card.Title>
        {sessionStart ? (
          <JPNVocabQuizSession />
        ) : (
          <>
            <Card.Text>Descriptions here.</Card.Text>
            <Button
              variant="success"
              size="lg"
              style={{ display: 'block', margin: 'auto' }}
              onClick={handleStart}>
              Start
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default JPNVocabQuiz;
