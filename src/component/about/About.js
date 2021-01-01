import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <Card className="about-card">
      <Card.Img
        as={Image}
        className="p-3"
        src={`${process.env.PUBLIC_URL}/pp_200px.jpg`}
        roundedCircle
      />
      <Card.Body>
        <Card.Title>Yu-Hsiang Wen</Card.Title>
        <Card.Text>
          Hello, I'm Yu-Hsiang Wen or Sean. I'm currently studying computer science in Univerity of
          Calgary.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="about-card-list-item" action>
          Work 1
        </ListGroup.Item>
        <ListGroup.Item className="about-card-list-item" action>
          Work 2
        </ListGroup.Item>
        <ListGroup.Item className="about-card-list-item" action>
          Work 3
        </ListGroup.Item>
      </ListGroup>
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Link
          href="https://github.com/ShouShou92410"
          rel="noopener noreferrer"
          target="_blank">
          <Image src={`${process.env.PUBLIC_URL}/github.png`} />
        </Card.Link>
        <Card.Link
          href="https://www.linkedin.com/in/yu-hsiang-wen-b61745144/"
          rel="noopener noreferrer"
          target="_blank">
          <Image src={`${process.env.PUBLIC_URL}/linkedin.png`} />
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default About;
