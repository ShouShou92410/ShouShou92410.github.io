import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function AboutSidePanelView() {
  return (
    <>
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
    </>
  );
}

export default AboutSidePanelView;
