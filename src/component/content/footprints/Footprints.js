import React from 'react';
import Card from 'react-bootstrap/Card';

function Footprints() {
  return (
    <Card className="content-card height-fill">
      <Card.Body>
        <Card.Title>
          <h1>Footprints</h1>
        </Card.Title>
        <Card.Text>
          Footprints is one of the project that I did for my Computer Science 571 - Design and
          Implementation of Database Systems class.
          <br />
          <br />
          It is an Andoird app that tracks the user's location using the GPS function on their
          mobile phone. After that the user can scan a receipt from a purchase they made at that
          location. The app only tracks when the user starts the tracking function and had stay in
          that approximate area for a few seconds, so the app is not tracking the position when the
          user is continuously moving, such as driving a car.
          <br />
          <br />
          The app is written in Kotlin using Android Studio, and we use the Firebase's realtime
          database for storing our data.
          <br />
          The receipt scanning function was made possible with the{' '}
          <a
            href="https://firebase.google.com/docs/ml-kit/recognize-text"
            rel="noopener noreferrer"
            target="_blank">
            text recognition APIs
          </a>{' '}
          from the ML Kit for Firebase.
          <br />
          The source code is{' '}
          <a
            href="https://github.com/ShouShou92410/Footprints"
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

export default Footprints;
