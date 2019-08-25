import React from 'react';
import { Container, Form, Button, Col, Row, Jumbotron } from 'react-bootstrap';


const SayHi = (props) => {

  const firstNameRef = React.createRef();
  const lastNameRef = React.createRef();
  const emailRef = React.createRef();
  const msgRef = React.createRef();
  //
  // let errors;
  // let rowErrors;
  //
  // const handleSubmit = (e) => {
  //   errors = [];
  //
  //   if(firstNameRef.current.value.length === 0) {
  //     e.preventDefault();
  //     errors.push("your name is required!");
  //   }
  //   if(emailRef.current.value.length === 0) {
  //     e.preventDefault();
  //     errors.push("email is required!");
  //   }
  //   if(msgRef.current.value.length === 0) {
  //     e.preventDefault();
  //     errors.push("a message is required!");
  //   }
  //
  //
  //   if(errors.length !== 0) {
  //     rowErrors = (
  //       <Row>
  //         <Col></Col>
  //         <Col xs={10}>
  //           {
  //             errors.map((err, index) =>
  //               <p key={index} className="validation-errs">{err}</p>
  //             )
  //           }
  //         </Col>
  //         <Col></Col>
  //       </Row>
  //     )
  //   }
  // }





  return (
    <Container fluid id="anchor-say-hi" ref={props.sayHiRef}>

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

        <Form action="https://formspree.io/joe91messina@gmail.com" method="POST">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Control type="text" placeholder="First Name" name="first-name" ref={firstNameRef}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Control type="text" placeholder="Last Name" name="last-name" ref={lastNameRef}/>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridEmail">
            <Form.Control type="email" placeholder="Enter email" name="email" ref={emailRef}/>
          </Form.Group>

          <Form.Group controlId="formGridTextarea">
            <Form.Control as="textarea" rows="3" name="message" ref={msgRef}/>
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
