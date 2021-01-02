import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function PersonalWebsite() {
  return (
    <Card className="content-card height-fill">
      <Card.Body>
        <Card.Title>
          <h1>ShouShou92410.github.io</h1>
        </Card.Title>
        <Card.Text>
          This is my personal website, it contains some information about me and some of my personal
          projects, you can find more details about those from the links on the left.
          <br />
          This is created using:
          <ul className="m-0">
            <li>React</li>
            <li>Firebase</li>
          </ul>
          Most of the contents on this website are all static files. However, some projects are
          hosted as part of this website, which uses the database provided by Firebase. The website
          is hosting as a GitHub user page. You can check out the source code{' '}
          <a
            href="https://github.com/ShouShou92410/ShouShou92410.github.io/tree/Source-Code"
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

export default PersonalWebsite;
