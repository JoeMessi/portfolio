import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import projects from '../data';


const WorksStudent = (props) => {

  // mapping each work into column cards
  const cards = projects.treehouse.map((project, index) =>
     <Col md className="col-works-grid" key={project.id}>
        <a href={`/projects/${project.id}`}>
          <Jumbotron style={{backgroundImage: `url(${process.env.PUBLIC_URL}${project.image_urls[0]})`}} className="jumbo-works">
            <h5 className="text-jumbo-works">{project.project_name}</h5>
          </Jumbotron>
        </a>
     </Col>
  );

  return (
    <Container fluid id="anchor-student" className="container-grey-bg" ref={props.studentRef}>
      <Row className="padding-row-works">
        <Col></Col>
        <Col xs={10}>
          <Row>
            <Col>
              <Jumbotron className="jumbos">
                <h2 className="headings-works">As a student</h2>
                <p>
                   I studied at <a href="https://teamtreehouse.com/" target="_blank">Treehouse</a> and I loved it.
                   I completed the Full Stack JavaScript Techdegree program
                   and these are the projects I made during my studying.</p>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            {cards}
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default WorksStudent;
