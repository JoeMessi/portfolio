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
                <p>
                I've worked for 2 years at a digital marketing company called Luxus.
                My main job was to create web pages using the famous content management system
                developed by Adobe: "Adobe Experience Manager" or AEM.
                The latest project I worked on at Luxus before I left was the development of the new
                site for Amadeus, have a look at two of the many pages I helped creating using AEM.
                </p>
              </Jumbotron>
            </Col>
          </Row>

          <Row>
            <Col></Col>

            <Col xs={12} sm={10}>
              <Row>
                <Col md className="col-works-luxus">
                   <a href="#">
                     <Jumbotron style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/amadeus.png`}} className="jumbo-works">
                       <h5 className="text-jumbo-works">View page</h5>
                     </Jumbotron>
                   </a>
                </Col>
                <Col md className="col-works-luxus">
                   <a href="#">
                     <Jumbotron style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/amadeus2.png`}} className="jumbo-works">
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
