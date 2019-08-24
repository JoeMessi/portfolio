import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import projects from '../data';


const WorksStudent = (props) => {

  // only treehouse projects from project data
  const treehouseData = projects.slice(0, 6);

  // mapping each work into column cards
  const cards = treehouseData.map((project, index) =>
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
                   I studied the Full Stack JavaScript Techdegree program at <a href="https://teamtreehouse.com/" target="_blank" rel="noopener noreferrer">Treehouse</a> and these are some of the projects I created during the course.</p>
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
