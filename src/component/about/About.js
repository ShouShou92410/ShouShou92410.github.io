import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

function About() {
  return (
    <Card className="about-card">
      <Card.Img
        as={Image}
        className="p-3"
        alt="profile picture"
        src={`${process.env.PUBLIC_URL}/pp.jpg`}
        roundedCircle
      />
      <Card.Body className="p-2" style={{ textAlign: 'center' }}>
        <Card.Title>Yu-Hsiang Wen</Card.Title>
        <Card.Text>
          Hello, I'm Yu-Hsiang Wen or Sean. I'm currently studying computer science in Univerity of
          Calgary.
        </Card.Text>
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
      <ListGroup className="list-group-flush p-1">
        <ListGroup.Item as={Link} to="/personal-website" className="about-card-list-item" action>
          Personal Website
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/tourist-tracker" className="about-card-list-item" action>
          tourist-tracker
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/footprints" className="about-card-list-item" action>
          Footprints
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/jpn-vocab-quiz" className="about-card-list-item" action>
          Japanese Vocab Quiz
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default About;
