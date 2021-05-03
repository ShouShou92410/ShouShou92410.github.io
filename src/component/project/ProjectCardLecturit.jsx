import React from 'react';
import Card from 'react-bootstrap/Card';

function ProjectCardLecturit() {
  return (
    <Card className="project-card shadow-hard">
      <Card.Header>Web Development</Card.Header>
      <Card.Body>
        <Card.Title>Lecturit</Card.Title>
        <Card.Text>
          A website that allows teacher and students to communicate through posts and comments. The front-end was done using AngularJS and the
          back-end used Firebase.
        </Card.Text>
        <Card.Link href="https://instacomm-da2a2.firebaseapp.com/#!/" target="_blank">
          Check it out
        </Card.Link>
        <Card.Link href="https://github.com/ShouShou92410/Lecturit" target="_blank">
          Source Code
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCardLecturit;
