import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function About() {
  return (
    <Container className="shadow-hard">
      <Row className="about-header">
        <Col md={12} lg={3} className="d-flex justify-content-center align-items-center py-3">
          <Image src={`${process.env.PUBLIC_URL}/pp.jpg`} width="200" height="200" roundedCircle />
        </Col>
        <Col className="py-3">
          <h1>Sean Wen</h1>
        </Col>
      </Row>
      <Row className="about-content">
        <Col md={12} lg={9} className="py-3">
          <Row>
            <Col xs={12} className="about-section mb-3">
              <h4 class="font-weight-bold">EXPERIENCE</h4>
              <hr />
              <div className="px-3 mb-2">
                <h6 className="mb-0">
                  Detechtion Technologies — <i>Software Intern</i>
                </h6>
                <small class="font-weight-light">June 2019 - PRESENT</small>
                <ul>
                  <li>Worked in a team that maintains and builds infrastructures that manage thousands of client data.</li>
                  <li>Helped set up an API project and a ReactJS project from scratch.</li>
                  <li>Responsible for adding and testing features to a website that the clients interact with.</li>
                </ul>
              </div>
            </Col>
            <Col xs={12} className="about-section mb-3">
              <h4 class="font-weight-bold">EDUCATION</h4>
              <hr />
              <div className="px-3 mb-2">
                <h6 className="mb-0">
                  University of Calgary — <i>B.S. in Computer Science</i>
                </h6>
                <small class="font-weight-light">Seotenber 2015 - April 2021</small>
                <ul>
                  <li>Completed a 14 months long Co-op / Internship program.</li>
                </ul>
              </div>
            </Col>
            <Col xs={12} className="about-section mb-3">
              <h4 class="font-weight-bold">PROJECTS</h4>
              <hr />
              <div className="px-3 mb-2">
                <h6>
                  ShouShou92410.github.io — <i>Website</i>
                </h6>
                <ul>
                  <li>My personal website showcasing myself and my projects.</li>
                  <li>Developed using JavaScript, ReactJS, HTML, CSS.</li>
                </ul>
              </div>
              <div className="px-3 mb-2">
                <h6>
                  Data Visualization — <i>Website</i>
                </h6>
                <ul>
                  <li>A webpage that demonstrates a dataset using the D3.js library.</li>
                  <li>Contains the visualization of the dataset as well as some interactions to filter the data.</li>
                  <li>Developed using JavaScript, D3.js, HTML, and CSS.</li>
                </ul>
              </div>
              <div className="px-3 mb-2">
                <h6>
                  Footprints — <i>Android app</i>
                </h6>
                <ul>
                  <li>An Android app that tracks and stores user’s locations and purchase activities.</li>
                  <li>Developed using Kotlin, Android Studio, and Firebase’s realtime database.</li>
                </ul>
              </div>
              <div className="px-3 mb-2">
                <h6>
                  Character Changer — <i>Java application</i>
                </h6>
                <ul>
                  <li>A Java program that replaces characters in a given text file with other similar looking characters.</li>
                  <li>Developed using Java and Eclipse</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={12} lg={3} className="py-3">
          <Row>
            <Col xs={12} className="about-section mb-3">
              <h6>SKILLS</h6>
              <ul className="list-clean font-weight-light">
                <li>JavaScript (ReactJS, Node.js, jQuery)</li>
                <li>HTML/CSS</li>
                <li>C# (ASP.NET Core)</li>
                <li>SQL (MSSQL)</li>
                <li>Java</li>
                <li>Python</li>
                <li>C++ (OpenGL)</li>
                <br />
                <li>Azure DevOps (CI/CD)</li>
                <li>Azure Stroage</li>
                <li>Visual Studio</li>
                <li>Visual Studio Code</li>
                <li>Git</li>
              </ul>
            </Col>
            <Col xs={12} className="about-section mb-3">
              <h6>LANGUAGES</h6>
              <ul className="list-clean font-weight-light">
                <li>English</li>
                <li>Chinese</li>
                <li>Japanese</li>
              </ul>
            </Col>
            <Col xs={12} className="about-section mb-3">
              <h6>INTERESTS</h6>
              <ul className="list-clean font-weight-light">
                <li>Gaming</li>
                <li>Working out</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
