import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function About() {
  return (
    <Container style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
      <Row style={{ backgroundColor: 'rgba(45 ,50, 55)' }}>
        <Col md={12} lg={3} className="d-flex justify-content-center align-items-center py-3">
          <Image src={`${process.env.PUBLIC_URL}/pp.jpg`} width="200" height="200" roundedCircle />
        </Col>
        <Col className="py-3">
          <h1>Sean Wen</h1>
        </Col>
      </Row>
      <Row style={{ backgroundColor: 'rgba(70, 75, 80)' }}>
        <Col md={12} lg={9} className="py-3">
          <Row>
            <Col xs={12}>
              <h5>EXPERIENCE</h5>
            </Col>
            <Col xs={12}>
              <h5>EDUCATION</h5>
            </Col>
            <Col xs={12}>
              <h5>PROJECTS</h5>
            </Col>
          </Row>
        </Col>
        <Col md={12} lg={3} className="py-3">
          <Row>
            <Col xs={12}>
              <h6>SKILLS</h6>
            </Col>
            <Col xs={12}>
              <h6>LANGUAGES</h6>
            </Col>
            <Col xs={12}>
              <h6>INTERESTS</h6>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
