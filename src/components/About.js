import React from 'react';
import { Container, Row, Col, Jumbotron, Image } from 'react-bootstrap';

const About = (props) => {
  return (
    <Container fluid className="container-dark" ref={props.aboutRef}>
      <Row>
         <Col>
           <Jumbotron className="jumbos">
             <h2 className="headings-works">About</h2>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Commodo sed egestas egestas fringilla phasellus. Dui faucibus in ornare
                  quam viverra orci.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Commodo sed egestas egestas fringilla phasellus. Dui faucibus in ornare
                  quam viverra orci.
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
