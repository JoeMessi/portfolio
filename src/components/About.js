import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

const About = (props) => {
  return (

    <Container fluid id="anchor-about" ref={props.aboutRef}>
      <Row>
         <Col>
           <Jumbotron id="about-heading" className="jumbos">
             <h2 className="headings-works">About</h2>
           </Jumbotron>
         </Col>
       </Row>

      <Row>
        <Col></Col>
        <Col xs={10} sm={10} md={10} lg={8}>
          <Jumbotron fluid id="jumbo-shrt-txt1" className="jumbos">
              <p id="para-shrt-txt1">
                 My name is Joe and I am a London-based JavaScript Developer.
                 I started learning Web Development a few years ago now and I have
                 a diverse set of skills ranging from design to development. I have
                 a good eye for beautiful and clean design, but my one true love is
                 JavaScript. I love JavaScript and everything that comes with it,
                 from the client-side to the server-side of the language, my appreciation
                 to Javascript keeps growing day by day
              </p>
            </Jumbotron>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default About;
