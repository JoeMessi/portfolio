import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';


const AnotherShortText = () => {
  return (
    <Container fluid className="container-dark">
      <Row id="row-another-txt">
        <Col></Col>
        <Col xs={10} sm={10} md={10} lg={8}>
          <Jumbotron fluid className="jumbos">
            <Container>
              <p id="para-shrt-txt2">
               I love JavaScript and everything that comes with it, especially React. 
              </p>
            </Container>
            </Jumbotron>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default AnotherShortText;
