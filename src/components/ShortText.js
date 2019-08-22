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
                 I love JavaScript and everything that comes with it. 
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
