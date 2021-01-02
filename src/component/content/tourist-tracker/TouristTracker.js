import React from 'react';
import Card from 'react-bootstrap/Card';

function TouristTracker() {
  return (
    <Card className="content-card height-fill">
      <Card.Body>
        <Card.Title>
          <h1>tourist-tracker</h1>
        </Card.Title>
        <Card.Text>
          tourist-tracker is one of the project that I did for my Computer Science 571 - Design and
          Implementation of Database Systems class.
          <br />
          <br />
          It is a website that enables regular tourist users to keep track of the tourist sites they
          have been to, then uses those records to generate some tourist destination recommendations
          with the frequent pattern mining techique. It also allows tourist site owners to get
          recommendations on what amenity they should add to attract more tourists.
          <br />
          <br />
          The website uses React for its front-end and Firebase's realtime database for storing data
          like users and site visited records.
          <br />
          For generating the recommendation, we used the Firebase Functions and ExpressJS to have a
          back-end API that handles the complex frequent pattern mining logic.
          <br />
          The website is hosted using Firebase's Hosting feature, you can check it out{' '}
          <a
            href="https://tourist-tracker-4d92c.web.app/"
            rel="noopener noreferrer"
            target="_blank">
            Here
          </a>
          .
          <br />
          The source code is{' '}
          <a
            href="https://github.com/ShouShou92410/tourist-tracker"
            rel="noopener noreferrer"
            target="_blank">
            Here
          </a>
          .
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TouristTracker;
