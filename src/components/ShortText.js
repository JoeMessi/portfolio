import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';


const ShortText = () => {
  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col xs={10} sm={10} md={10} lg={8}>
          <Jumbotron fluid id="jumbo-shrt-txt1" className="jumbos">
            <Container>
              <p id="para-shrt-txt1">
                 I'm a Full Stack JavaScript Developer and this is my Portfolio.
              </p>
            </Container>
            </Jumbotron>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default ShortText;
