import React from 'react';
import Card from 'react-bootstrap/Card';

function ProjectCardCharacterChanger() {
  return (
    <Card className="project-card shadow-hard">
      <Card.Header>Java Application</Card.Header>
      <Card.Body>
        <Card.Title>Character Changer</Card.Title>
        <Card.Text>
          A Java program that replaces characters in a given text file with other similar looking characters. For example, replacing the letter 'a' to
          the character '@'.
        </Card.Text>
        <Card.Link href="https://github.com/ShouShou92410/CharacterChanger" target="_blank">
          Source Code
        </Card.Link>
        <Card.Link href="https://www.dropbox.com/s/bm84xctg204yl30/Character%20Replacer.jar?dl=0" target="_blank">
          Download
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCardCharacterChanger;
