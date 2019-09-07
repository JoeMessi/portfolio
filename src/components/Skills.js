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

           <Col className="cols-skills"><a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer"><Image src={`${process.env.PUBLIC_URL}/images/js.png`}/></a></Col>
           <Col className="cols-skills"><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><Image src={`${process.env.PUBLIC_URL}/images/react.png`}/></a></Col>
           <Col className="cols-skills"><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"><Image src={`${process.env.PUBLIC_URL}/images/node.png`}/></a></Col>
           <Col className="cols-skills"><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer"><Image className="skills-img" src={`${process.env.PUBLIC_URL}/images/express.png`}/></a></Col>
           <Col className="cols-skills"><a href="https://jquery.com/" target="_blank" rel="noopener noreferrer"><Image src={`${process.env.PUBLIC_URL}/images/jquery.png`}/></a></Col>

           <Col className="cols-skills"><a href="https://en.wikipedia.org/wiki/Application_programming_interface" target="_blank" rel="noopener noreferrer"><Image className="skills-img" src={`${process.env.PUBLIC_URL}/images/api.png`}/></a></Col>
           <Col className="cols-skills"><a href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer"><Image id="react-boot-skills-img" src={`${process.env.PUBLIC_URL}/images/react-bootstrap.png`}/></a></Col>
           <Col className="cols-skills"><a href="https://en.wikipedia.org/wiki/SQL" target="_blank" rel="noopener noreferrer"><Image className="skills-img" src={`${process.env.PUBLIC_URL}/images/sql.png`}/></a></Col>
           <Col className="cols-skills"><a href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noopener noreferrer"><Image src={`${process.env.PUBLIC_URL}/images/html.png`}/></a></Col>
           <Col className="cols-skills"><a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank" rel="noopener noreferrer"><Image src={`${process.env.PUBLIC_URL}/images/css.png`}/></a></Col>

           </Row>
        </Col>
        <Col></Col>
    </Row>
    </Container>
  );
}

export default Skills;
