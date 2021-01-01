import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About from './about/About';

function App() {
  return (
    <Container className="pt-4 pb-4" fluid>
      <Row>
        <Col xs={2}>
          <About />
        </Col>
        <Col xs={8}>2</Col>
        <Col xs={2}>3</Col>
      </Row>
    </Container>
  );
}

export default App;
