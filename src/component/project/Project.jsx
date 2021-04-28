import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCardCPSC583Visualization from './ProjectCardCPSC583Visualization';
import ProjectCardFootprints from './ProjectCardFootprints';
import ProjectCardCharacterChanger from './ProjectCardCharacterChanger';

function Project() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <p className="w-100 text-center">
            <h1>Projects</h1>
            Here are a list of projects that I have done and still have their source code.
            <br />
            You can check out my GitHub repositories{' '}
            <a href="https://github.com/ShouShou92410?tab=repositories" target="_blank" rel="noopener noreferrer">
              HERE
            </a>
            .
            <hr />
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={4} className="my-2">
          <ProjectCardCPSC583Visualization />
        </Col>
        <Col md={12} lg={4} className="my-2">
          <ProjectCardFootprints />
        </Col>
        <Col md={12} lg={4} className="my-2">
          <ProjectCardCharacterChanger />
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
