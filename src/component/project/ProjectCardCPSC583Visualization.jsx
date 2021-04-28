import React from 'react';
import Card from 'react-bootstrap/Card';

function ProjectCardCPSC583Visualization() {
  return (
    <Card className="content-container">
      <Card.Header>Web Development</Card.Header>
      <Card.Body>
        <Card.Title>CPSC 583 Visualization</Card.Title>
        <Card.Text>
          A final project I did for the class CPSC 583 at the University of Calgary. I used the D3.js library to create a visualization on data of the
          use of internet services by age group and household income quartile in Canada during 2018.
        </Card.Text>
        <Card.Link href="https://cpsc583-visualization.web.app/pages/final.html" target="_blank">
          Check it out
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCardCPSC583Visualization;
