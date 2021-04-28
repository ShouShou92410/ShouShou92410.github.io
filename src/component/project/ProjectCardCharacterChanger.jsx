import React from 'react';
import Card from 'react-bootstrap/Card';

function ProjectCardCharacterChanger() {
  return (
    <Card className="content-container">
      <Card.Header>Java Application</Card.Header>
      <Card.Body>
        <Card.Title>Character Changer</Card.Title>
        <Card.Text>
          A Java program that replaces characters in a given text file with other similar looking characters. For example, changing the letter 'a' to
          the character '@'.
        </Card.Text>
        <Card.Link href="https://github.com/ShouShou92410/CharacterChanger" target="_blank">
          Source Code
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCardCharacterChanger;
