import React from 'react';
import { Container, Form, Button, Col, Row, Jumbotron } from 'react-bootstrap';


const SayHi = (props) => {
  return (
    <Container fluid ref={props.sayHiRef}>

      <Row>
         <Col>
           <Jumbotron id="jumbo-contact-heading" className="jumbos">
             <h2 className="headings-works">Say hi</h2>
           </Jumbotron>
         </Col>
       </Row>

      <Row id="row-contact-form">
        <Col></Col>
        <Col xs={10}>


        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formGridTextarea">
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>


        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default SayHi;
