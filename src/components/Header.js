import React from 'react';
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap';


const Header = (props) => {
  return (
    <Container fluid className="header-bg" ref={props.jRef}>
      <Row>
        <Col></Col>
        <Col xs={8} sm={4} md={4} lg={3}><Image src={process.env.PUBLIC_URL + '/images/joe.png'} id="profile-img" /></Col>
        <Col></Col>
      </Row>

      <Row>
        <Col></Col>
        <Col xs={10} sm={10} md={6} lg={5}>
          <Jumbotron fluid className="jumbos">
            <h1 id="hero-greeting">Hi, I'm Joe, Nice to meet you :)</h1>
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
