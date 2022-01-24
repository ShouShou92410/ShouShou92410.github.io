import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

function About() {
  return (
    <Container className="shadow-hard">
      <Row className="about-header">
        <Col md={12} lg={3} className="d-flex justify-content-center align-items-center py-3">
          <Image src={`${process.env.PUBLIC_URL}/pp.jpg`} width="200" height="200" rounded />
        </Col>
        <Col md={12} lg={6} className="text-center text-lg-left py-3">
          <h1>Sean Wen</h1>
          <span style={{ color: '#87a5c8' }}>
            <p className="mb-2 mb-lg-0">
              I'm Yu-Hsiang Wen, you can also call me Sean. I was born in Kaohsiung, Taiwan, and moved to Calgary, Canada at the age of 12.
            </p>
            <p className="mb-2 mb-lg-0">
              I'm a software developer that started programming at the age of 16. Expert knowledge in front and back-end web development. Excellent
              team player and strong problem solver.
            </p>
            <p className="mb-2 mb-lg-0">
              In my free time, I enjoy playing video games and staying active. Recently, I've been playing a lot of Age of Empires 2 and Warframe.
            </p>
          </span>
        </Col>
        <Col md={12} lg={3} className="d-flex justify-content-center align-items-center py-3 ">
          <ul className="list-clean p-0 m-0">
            <li className="mb-3">
              <a
                href="https://linkedin.com/in/yuhsiangwen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                style={{ fontSize: '1.1rem', textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                linkedin.com/in/yuhsiangwen
              </a>
            </li>
            <li className="mb-3">
              <a
                href="https://github.com/ShouShou92410"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                style={{ fontSize: '1.1rem', textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faGithubSquare} className="mr-2" />
                github.com/ShouShou92410
              </a>
            </li>
            <li className="mb-3">
              <a
                href="mailto:sw92410@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                style={{ fontSize: '1.1rem', textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faEnvelopeSquare} className="mr-2" />
                sw92410@hotmail.com
              </a>
            </li>
          </ul>
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
                  Detechtion Technologies — <i>Staff Software Developer</i>
                </h6>
                <small class="font-weight-light">September 2021 - PRESENT</small>
                <ul>
                  <li>Maintain a hybrid mobile application that supports around 20 different client versions at the same time.</li>
                  <li>Helped upgrade the backend infrastructures and project dependencies of the hybrid mobile application.</li>
                  <li>Designing and developing a React Native project from scratch.</li>
                </ul>
              </div>
              <div className="px-3 mb-2">
                <h6 className="mb-0">
                  Detechtion Technologies — <i>Software Intern</i>
                </h6>
                <small class="font-weight-light">June 2019 - September 2021</small>
                <ul>
                  <li>Worked in an agile team of 5 that maintains and builds infrastructures that manage thousands of client data.</li>
                  <li>Helped set up the foundations for an API project and a ReactJS project, such as CRUD endpoints and web app routing.</li>
                  <li>Responsible for adding and testing features to a website for hundreds of clients to interact with.</li>
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
                <small class="font-weight-light">Seotenber 2015 - May 2021</small>
                <ul>
                  <li>Completed a 14 months long Co-op / Internship program.</li>
                </ul>
              </div>
            </Col>
            <Col xs={12} className="about-section mb-3">
              <h4 class="font-weight-bold">
                PROJECTS
                <a
                  href={`${process.env.PUBLIC_URL}/projects`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                  style={{ color: 'inherit' }}>
                  <FontAwesomeIcon size="xs" icon={faExternalLinkAlt} />
                </a>
              </h4>

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
        <Col md={12} lg={3} className="py-lg-3">
          <Row>
            <Col xs={12} className="about-section mb-3">
              <h4>SKILLS</h4>
              <hr />
              <ul className="list-clean font-weight-light">
                <li>JavaScript (ReactJS, Node.js, TypeScript)</li>
                <li>HTML/CSS</li>
                <li>C# (.NET Core)</li>
                <li>SQL (MSSQL)</li>
                <li>Java</li>
                <li>Python</li>
                <br />
                <li>Git</li>
                <li>Azure</li>
                <li>Azure DevOps</li>
                <li>Amazon Web Services</li>
                <li>Visual Studio</li>
                <li>Visual Studio Code</li>
                <li>Android</li>
              </ul>
            </Col>
            <Col xs={12} className="about-section mb-3">
              <h4>LANGUAGES</h4>
              <hr />
              <ul className="list-clean font-weight-light">
                <li>English (Bilingual)</li>
                <li>Chinese (Native)</li>
                <li>Japanese (Elementary)</li>
              </ul>
            </Col>
            <Col xs={12} className="about-section mb-3">
              <h4>INTERESTS</h4>
              <hr />
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
