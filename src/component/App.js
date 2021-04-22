import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavigationBar from './root/NavigationBar';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Container className="content"></Container>
    </BrowserRouter>
  );
}

export default App;
