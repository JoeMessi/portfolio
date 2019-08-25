import React from 'react';
import { Container, Row, Col, Jumbotron, Image } from 'react-bootstrap';

const Skills = () => {
  return (
    <Container fluid className="container-grey-bg">
      <Row>
        <Col></Col>
        <Col xs={12} sm={12} md={12} lg={10}>
          <Row>
             <Col>
               <Jumbotron id="jumbo-skills-heading" className="jumbos">
                 <h2 className="headings-works">My skills</h2>
               </Jumbotron>
             </Col>
           </Row>
           <Row id="skills-row-1">

           <Col className="cols-skills"><Image src={`${process.env.PUBLIC_URL}/images/js.png`}/></Col>
           <Col className="cols-skills"><Image src={`${process.env.PUBLIC_URL}/images/react.png`}/></Col>
           <Col className="cols-skills"><Image src={`${process.env.PUBLIC_URL}/images/node.png`}/></Col>
           <Col className="cols-skills"><Image className="skills-img" src={`${process.env.PUBLIC_URL}/images/express.png`}/></Col>
           <Col className="cols-skills"><Image src={`${process.env.PUBLIC_URL}/images/jquery.png`}/></Col>


{/*
  <Col><div id="skills-c1" className="skills-circles"><span className="text-skill-circle">HTTP</span></div></Col>
  <Col id="ooj"><div id="skills-c2" className="skills-circles"><span className="text-skill-circle text-skill-circle-light">OOJ</span></div></Col>
  <Col><div id="skills-c3" className="skills-circles">
    <span id="span-js-lng" className="text-skill-circle text-skill-circle-light">JavaScript</span>
    <span id="span-js-shrt" className="text-skill-circle text-skill-circle-light">Js</span>
  </div></Col>
  <Col><div id="skills-c4" className="skills-circles"><span className="text-skill-circle">jQuery</span></div></Col>
  <Col><div id="skills-c5" className="skills-circles"><span className="text-skill-circle text-skill-circle-light">API</span></div></Col>
*/}



        
           <Col className="cols-skills"><Image className="skills-img" src={`${process.env.PUBLIC_URL}/images/api.png`}/></Col>
           <Col className="cols-skills"><Image id="react-boot-skills-img" src={`${process.env.PUBLIC_URL}/images/react-bootstrap.png`}/></Col>
           <Col className="cols-skills"><Image className="skills-img" src={`${process.env.PUBLIC_URL}/images/ajax.png`}/></Col>
           <Col className="cols-skills"><Image src={`${process.env.PUBLIC_URL}/images/html.png`}/></Col>
           <Col className="cols-skills"><Image src={`${process.env.PUBLIC_URL}/images/css.png`}/></Col>

{/*
  <Col><div id="skills-c6" className="skills-circles"><span className="text-skill-circle text-skill-circle-light">Express</span></div></Col>
  <Col><div id="skills-c7" className="skills-circles text-skill-circle-dark"><span className="text-skill-circle">React</span></div></Col>
  <Col><div id="skills-c8" className="skills-circles"><span className="text-skill-circle text-skill-circle-light">Ajax</span></div></Col>
  <Col><div id="skills-c9" className="skills-circles"><span className="text-skill-circle">Node.js</span></div></Col>
*/}

           </Row>
        </Col>
        <Col></Col>
    </Row>
    </Container>
  );
}

export default Skills;
