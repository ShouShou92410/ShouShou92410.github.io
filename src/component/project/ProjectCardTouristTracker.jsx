import React from 'react';
import Card from 'react-bootstrap/Card';

function ProjectCardTouristTracker() {
  return (
    <Card className="project-card shadow-hard">
      <Card.Header>Web Development</Card.Header>
      <Card.Body>
        <Card.Title>Tourist Tracker</Card.Title>
        <Card.Text>
          A website that tourists and site owners can manage and get recommendations on their tourist visit and tourist site. The front-end was done
          using React, while the back-end used the realtime database and the APIs from Firebase. The recommendation function uses the Firebase's
          functions and was coded with Express.js framework.
        </Card.Text>
        <Card.Link href="https://github.com/ShouShou92410/tourist-tracker" target="_blank">
          Source Code
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCardTouristTracker;
