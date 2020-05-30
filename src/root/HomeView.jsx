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
          <p>
            This is my personal website, it hosts my personal projects and progress. You can see
            them by clicking the links in the navigation bar over on the top. The website is using
            React for its front-end, Firebase for its database, and it is hosting as a GitHub user
            page, you can check out the source code{' '}
            <a
              href="https://github.com/ShouShou92410/ShouShou92410.github.io/tree/Source-Code"
              target="_blank">
              Here
            </a>
            . In the future, I want to create a back-end server and have the front-end use the APIs
            to fetch data.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default HomeView;
