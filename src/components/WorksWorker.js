import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import projects from '../data';


const WorksWorker = (props) => {


  return (
    <Container fluid ref={props.workerRef}>
      <Row className="padding-row-works">
        <Col></Col>
        <Col xs={10}>
          <Row>
            <Col>
              <Jumbotron className="jumbos">
                <h2 className="headings-works">As a worker</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </Jumbotron>
            </Col>
          </Row>

          <Row>
            <Col></Col>

            <Col xs={12} sm={10}>
              <Row>
                <Col md className="col-works-luxus">
                   <a href="#">
                     <Jumbotron style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/public_api_request_1.png`}} className="jumbo-works">
                       <h5 className="text-jumbo-works">View page</h5>
                     </Jumbotron>
                   </a>
                </Col>
                <Col md className="col-works-luxus">
                   <a href="#">
                     <Jumbotron style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/public_api_request_2.png`}} className="jumbo-works">
                       <h5 className="text-jumbo-works">View page</h5>
                     </Jumbotron>
                   </a>
                </Col>
              </Row>
            </Col>

            <Col></Col>
          </Row>

        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default WorksWorker;
