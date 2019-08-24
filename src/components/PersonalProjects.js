import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import projects from '../data';


const PersonalProjects = (props) => {

  // only personal projects from project data
  const personalData = projects.slice(6);

  // mapping each work into column cards
  const cards = personalData.map((project, index) =>
     <Col md className="col-personal-works-grid" key={project.id}>
        <a href={`/projects/${project.id}`}>
          <Jumbotron style={{backgroundImage: `url(${process.env.PUBLIC_URL}${project.image_urls[0]})`}} className="jumbo-works">
            <h5 className="text-jumbo-works">{project.project_name}</h5>
          </Jumbotron>
        </a>
     </Col>
  );

  return (
    <Container fluid id="container-works-gallery-student" className="container-dark" ref={props.studentRef}>
      <Row className="padding-row-works" id="row-react">
        <Col></Col>
        <Col xs={10}>
          <Row>
            <Col></Col>
            <Col xs={12} sm={12} lg={8}>
              <Jumbotron className="jumbos" id="jumbo-react">
                <h2 className="headings-works" id="heading-react">Me and React</h2>
                <p>
                  I love JavaScript and everything that comes with it, especially React.
                  These are some of my personal projects I built using this powerful library.</p>
              </Jumbotron>
            </Col>
            <Col></Col>
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

export default PersonalProjects;
