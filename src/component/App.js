import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About from './about/About';
import Content from './content/Content';

function App() {
  return (
    <BrowserRouter>
      <Container className="pt-4 pb-4" fluid>
        <Row>
          <Col xs={2}>
            <About />
          </Col>
          <Col xs={10} className="pl-5 pr-5">
            <Content />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
