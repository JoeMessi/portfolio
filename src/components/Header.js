import React from 'react';
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap';


const Header = (props) => {
  return (
    /*style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/header.jpg)`}}*/
    <Container fluid className="header-bg" id="anchor-home" ref={props.jRef}>
      <Row>
        <Col></Col>
        <Col xs={8} sm={4} md={4} lg={3}><Image src={process.env.PUBLIC_URL + '/images/joe.png'} id="profile-img" /></Col>
        <Col></Col>
      </Row>

      <Row>
        <Col></Col>
        <Col xs={12} sm={12} md={10} lg={8} xl={6}>
          <Jumbotron fluid className="jumbos">
            <h1 id="hero-greeting">Joe Messina</h1>
            <h5 id="hero-text">Full Stack JavaScript Developer</h5>
          </Jumbotron>
        </Col>
        <Col></Col>
      </Row>

    </Container>
  );
}

export default Header;


// <Row>
//   <Col>
//    <Image src={joe} rounded />
//   </Col>
// </Row>
