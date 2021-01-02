import React from 'react';
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
          projects, you can find more details about those from the links on the left. I want to use
          this website to showcase what I do, but also to practice programming related skills as I
          continue developing and maintaining this website, such as web development, version
          control, and refactoring.
          <br />
          <br />
          Most of the contents on this website are just descriptions of my other projects. However,
          some of the projects are hosted as part of this website, which include more complicated
          logic and use the database provided by Firebase.
          <br />
          The website is hosting as a GitHub user page. You can check out the source code{' '}
          <a
            href="https://github.com/ShouShou92410/ShouShou92410.github.io"
            rel="noopener noreferrer"
            target="_blank">
            Here
          </a>
          .
          <br />
          <br />
          Tools that I used to create this website:
          <ul className="m-0">
            <li>React</li>
            <li>Firebase</li>
            <li>GitHub</li>
            <li>Git</li>
            <li>NPM</li>
            <li>Visual Studio Code</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PersonalWebsite;
