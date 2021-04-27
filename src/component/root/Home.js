import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <>
      <div id="home-jumbotron-background">
        <Jumbotron id="home-jumbotron" className="d-flex align-items-center pt-0 pb-0">
          <Container>
            <Row>
              <Col md={12} lg={3} className="d-flex justify-content-center align-items-center pt-3 pb-3">
                <Image src={`${process.env.PUBLIC_URL}/pp.jpg`} width="200" height="200" roundedCircle />
              </Col>
              <Col className="pt-3 pb-3">
                <p className="m-0">Hello, my name is</p>
                <h1>Sean Wen</h1>
                <p>
                  I'm a software developer interested in web and game development. I've been programming since the age of 16, and have graduated from
                  the University of Calgary as a computer science major. I love playing video games, being active, and explore the Calgary city with
                  my friends!
                </p>
                <p>You can learn more about me and the projects I did on this website.</p>
                <p>
                  <Button as={Link} to="/about" variant="info" style={{ textShadow: 'none' }}>
                    More about me
                  </Button>
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    </>
  );
}

export default Home;
