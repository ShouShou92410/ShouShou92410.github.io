import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardColumns from 'react-bootstrap/CardColumns';
import ProjectCardCPSC583Visualization from './ProjectCardCPSC583Visualization';
import ProjectCardFootprints from './ProjectCardFootprints';
import ProjectCardCharacterChanger from './ProjectCardCharacterChanger';
import ProjectCardTouristTracker from './ProjectCardTouristTracker';
import ProjectCardLecturit from './ProjectCardLecturit';

function Project() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <p className="w-100 text-center m-0">
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
      <CardColumns className="d-none d-lg-block">
        <ProjectCardCPSC583Visualization />
        <ProjectCardTouristTracker />
        <ProjectCardFootprints />
        <ProjectCardLecturit />
        <ProjectCardCharacterChanger />
      </CardColumns>
      <Row className="d-md-block d-lg-none">
        <Col md={12} className="my-3">
          <ProjectCardCPSC583Visualization />
        </Col>
        <Col md={12} className="my-3">
          <ProjectCardTouristTracker />
        </Col>
        <Col md={12} className="my-3">
          <ProjectCardFootprints />
        </Col>
        <Col md={12} className="my-3">
          <ProjectCardLecturit />
        </Col>
        <Col md={12} className="my-3">
          <ProjectCardCharacterChanger />
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
