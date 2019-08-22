import React from 'react';
import { Container, Row, Col, Jumbotron, Button, Image } from 'react-bootstrap';

const WorkDetails = (props) => {
  // projects data
  const projects = props.data;
  // project id
  const projectId = props.match.params.id;
  // single project
  const project = projects.treehouse[projectId];


  return (
   <div>
     {/* ternary operator -> project ? show page : show error message */}
     {
       project ?

     <Container fluid>
       <Row id="hero-work-details-row">
         <Col></Col>
           <Col xs={12} sm={12} md={7} lg={7}>
             <Jumbotron fluid className="jumbos-hero-work-details">
             <Button href="/#anchor-student" variant="outline-dark" size="sm">Back</Button>
               <h2>{project.project_name}</h2>
               <p>{project.description}</p>
             </Jumbotron>
           </Col>

           <Col xs={12} sm={12} md={3} lg={3}>
             <Jumbotron fluid id="jumbo-technologies" className="jumbos-hero-work-details">
               <h5 id="technologies">Technologies</h5>
               <ul id="ul-technologies">
                 {project.technologies.map((item, index) => <li key={index}>{item}</li>)}
               </ul>
               <Button variant="dark" block>Live Demo</Button>
               <Button variant="dark" block>GitHub Repo</Button>
             </Jumbotron>
           </Col>
           <Col></Col>
       </Row>

       <Row className="rows-screenshots-works">
         <Col></Col>
         <Col xs={12} sm={12} md={10} className="col-screenshots-works"><Image src={`${process.env.PUBLIC_URL}${project.image_urls[1]}`} fluid/></Col>
         <Col></Col>
       </Row>
       <Row className="rows-screenshots-works">
         <Col></Col>
         <Col xs={12} sm={12} md={10} className="col-screenshots-works"><Image src={`${process.env.PUBLIC_URL}${project.image_urls[2]}`} fluid/></Col>
         <Col></Col>
       </Row>
       <Row className="rows-screenshots-works">
         <Col></Col>
         <Col xs={12} sm={12} md={10} className="col-screenshots-works"><Image src={`${process.env.PUBLIC_URL}${project.image_urls[3]}`} fluid/></Col>
         <Col></Col>
       </Row>
     </Container>
         :
         <Container fluid id="container-error-msg">
           <Row>
             <Col></Col>
             <Col xs={10} sm={10} md={8}>
               <Jumbotron fluid id="jumbo-error-msg" className="jumbos-hero-work-details">
                 <h3>Whoops! Something went wrong</h3>
               </Jumbotron>
             </Col>
             <Col></Col>
            </Row>
            <Row id="row-go-back-btn">
               <Col></Col>
               <Col xs={4} sm={4} md={2}>
                  <Button href="/" variant="dark" block>Go back</Button>
               </Col>
               <Col></Col>
            </Row>
         </Container>
     }

   </div>
  );
}

export default WorkDetails;
