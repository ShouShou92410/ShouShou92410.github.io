import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomeView() {
  return (
    <>
      <Row>
        <Col lg={2} />
        <Col lg={7}>
          <h1>Welcome!</h1>
          <p className="fs-18">
            This is my personal website, it hosts my personal projects and progress. You can see
            them by clicking the links in the navigation bar over on the top. The website is created
            in React, you can check out the source code{' '}
            <a
              href="https://github.com/ShouShou92410/ShouShou92410.github.io/tree/Source-Code"
              target="_blank">
              Here
            </a>
            .
          </p>
        </Col>
      </Row>
    </>
  );
}

export default HomeView;
