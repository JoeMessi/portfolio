import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';


const WorksWorker = (props) => {

  return (
    <Container fluid id="anchor-worker" ref={props.workerRef}>
      <Row className="padding-row-works">
        <Col></Col>
        <Col xs={10}>
          <Row>
            <Col>
              <Jumbotron className="jumbos">
                <h2 className="headings-works">As a worker</h2>
                <p>
                I have two years experience working at a digital marketing company called <a href="https://www.luxusworldwide.com/" target="_blank" rel="noopener noreferrer">Luxus</a>.
                My key responsibilities were to create web pages using Adobe's content management system,
                creating and updating javascript files and HTML emails.
                One of the latest projects I worked on was the development of the new
                site for the travel technology company <a href="https://amadeus.com/en" target="_blank" rel="noopener noreferrer">Amadeus</a>.
                The following are two examples of the many pages I helped to create using Adobe Experience Manager
                </p>
              </Jumbotron>
            </Col>
          </Row>

          <Row>
            <Col></Col>
            <Col xs={12} sm={10}>
              <Row>
                <Col md className="col-works-luxus">
                   <a href="https://amadeus.com/en/portfolio/airlines/farexpert-filing-platform" target="_blank" rel="noopener noreferrer">
                     <Jumbotron style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/amadeus.png`}} className="jumbo-works">
                       <h5 className="text-jumbo-works">View page</h5>
                     </Jumbotron>
                   </a>
                </Col>
                <Col md className="col-works-luxus">
                   <a href="https://amadeus.com/en/insights/blog/customers-living-growing-live-travel-space" target="_blank" rel="noopener noreferrer">
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
