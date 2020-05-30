import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutView() {
  return (
    <>
      <Row>
        <Col lg={2} />
        <Col lg={7}>
          <h1>About</h1>
          <h5>Who?</h5>
          <p>
            My name is 文宥翔 or Yu-Hsiang Wen in English, you can also called me Sean Wen. I'm a
            Taiwanese that came to Canada at the age of 12, after I finished my elementary school.
            Currently I'm a University of Calgary student majoring in Computer Science.
          </p>
        </Col>
        <Col lg={2}>
          <Row className="justify-content-md-center">
            <Image src={`${process.env.PUBLIC_URL}/pp_200px.jpg`} roundedCircle />
          </Row>
          <Row className="justify-content-md-center">
            <p className="text-center">
              Hello, I'm Sean.
              <br />
              Welcome to my website!
            </p>
          </Row>
          <Row className="justify-content-md-center">
            <a href="https://github.com/ShouShou92410" target="_blank">
              <Image src={`${process.env.PUBLIC_URL}/github.png`} />
            </a>
            <a href="https://www.linkedin.com/in/yu-hsiang-wen-b61745144/" target="_blank">
              <Image src={`${process.env.PUBLIC_URL}/linkedin.png`} />
            </a>
            <a href="https://steamcommunity.com/id/Seavanas" target="_blank">
              <Image src={`${process.env.PUBLIC_URL}/steam.png`} />
            </a>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default AboutView;
