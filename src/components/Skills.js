import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

const Skills = () => {
  return (
    <Container>
       <Row>
          <Col>
            <Jumbotron className="jumbos">
              <h2 className="headings-works">My skills</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row id="skills-row-1">

          <Col><div id="skills-c1" className="skills-circles"><span className="text-skill-circle">JavaScript</span></div></Col>
          <Col><div id="skills-c2" className="skills-circles"></div></Col>
          <Col><div id="skills-c3" className="skills-circles"></div></Col>
          <Col><div id="skills-c4" className="skills-circles"></div></Col>
          <Col><div id="skills-c5" className="skills-circles"></div></Col>

        </Row>

        <Row id="skills-row-2">

          <Col><div id="skills-c6" className="skills-circles"></div></Col>
          <Col><div id="skills-c7" className="skills-circles"></div></Col>
          <Col><div id="skills-c8" className="skills-circles"></div></Col>
          <Col><div id="skills-c9" className="skills-circles"></div></Col>

        </Row>
    </Container>
  );
}

export default Skills;
