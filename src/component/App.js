import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavigationBar from './root/NavigationBar';
import Content from './root/Content';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Content />
      <Container></Container>
    </BrowserRouter>
  );
}

export default App;
