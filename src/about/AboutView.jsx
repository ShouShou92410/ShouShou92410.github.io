import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutSidePanelView from './AboutSidePanelView';

function AboutView() {
  return (
    <>
      <Row>
        <Col lg={2} />
        <Col lg={7}>
          <h1>About</h1>
          <hr />
          <h5>Who?</h5>
          <p>
            My name is 文宥翔 or Yu-Hsiang Wen in English, you can also called me Sean Wen. I'm a
            Taiwanese that came to Canada at the age of 12, after I finished my elementary school.
            Currently I'm a University of Calgary student majoring in Computer Science.
          </p>
        </Col>
        <Col lg={2}>
          <AboutSidePanelView />
        </Col>
      </Row>
    </>
  );
}

export default AboutView;
