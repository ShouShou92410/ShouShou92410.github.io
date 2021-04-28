import React from 'react';
import Card from 'react-bootstrap/Card';

function ProjectCardFootprints() {
  return (
    <Card className="content-container">
      <Card.Header>Andoird App</Card.Header>
      <Card.Body>
        <Card.Title>Footprints</Card.Title>
        <Card.Text>
          An Android app developed using Kotlin. The app tracks the user movement with the GPS on their phone and has the ability to scan purchase
          receipt then store them in a database.
        </Card.Text>
        <Card.Link href="https://github.com/ShouShou92410/Footprints" target="_blank">
          Source Code
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCardFootprints;