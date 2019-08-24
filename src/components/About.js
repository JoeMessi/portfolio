import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

const About = (props) => {
  return (
    <Container fluid className="container-dark" id="anchor-about" ref={props.aboutRef}>
      <Row>
         <Col>
           <Jumbotron className="jumbos">
             <h2 id="about-heading" className="headings-works">About</h2>
           </Jumbotron>
         </Col>
       </Row>

       <Row className="padding-row-works">
         <Col></Col>

         <Col xs={12} sm={10}>
           <Row>
             <Col md id="col-bg-about" className="col-works-luxus" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/work3.png)`}}>
                  <Jumbotron id="jumbo-about-img" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/work3.png)`}}>
                  </Jumbotron>
             </Col>
             <Col md className="col-works-luxus">
                <Jumbotron id="jumbo-para-about" className="jumbos">
                  <p id="para-about">
                     My name is Joe and I am a London-based JavaScript Developer.
                     I started learning Web Development a few years ago now and I have
                     a diverse set of skills ranging from design to development. I have
                     a good eye for beautiful and clean design, but my one true love is
                     JavaScript. I love JavaScript and everything that comes with it,
                     from the client-side to the server-side of the language, my appreciation
                     to Javascript keeps growing day by day.
                  </p>
                </Jumbotron>
             </Col>
           </Row>
          </Col>

          <Col></Col>
        </Row>
    </Container>
  );
}

export default About;
