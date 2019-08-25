import React, { Component } from 'react';
import { Container, Form, Button, Col, Row, Jumbotron } from 'react-bootstrap';


export default class SayHi extends Component {

  state = {
    fields: {
      firstName: '',
      email: '',
      message: '',
    },
    errors: {}
  }

  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //first name
    if(!fields["firstName"]){
      formIsValid = false;
      errors["firstName"] = " First name required!";
    }
    //email
    if(!fields["email"]){
      formIsValid = false;
      errors["email"] = "Email required!";
    }
    //message
    if(!fields["message"]){
      formIsValid = false;
      errors["message"] = "Don't forget a message!";
    }

    this.setState({errors: errors});
    return formIsValid;
  }



  contactSubmit = (e) => {
    if(!this.handleValidation()){
      e.preventDefault();
    }
  }

  handleChange = (field, e) => {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({fields});
  }


  render() {
    return (
      <Container fluid id="anchor-say-hi" ref={this.props.sayHiRef}>

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

          <Form onSubmit={this.contactSubmit} action="https://formspree.io/joe91messina@gmail.com" method="POST">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Control type="text" placeholder="First Name" name="first-name" onChange={this.handleChange.bind(this, "firstName")} value={this.state.fields["firstName"]}/>
                <span className="validation-errs">{this.state.errors["firstName"]}</span>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Control type="text" placeholder="Last Name" name="last-name"/>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridEmail">
              <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
              <span className="validation-errs">{this.state.errors["email"]}</span>
            </Form.Group>

            <Form.Group controlId="formGridTextarea">
              <Form.Control as="textarea" rows="3" name="message" onChange={this.handleChange.bind(this, "message")} value={this.state.fields["message"]}/>
              <span className="validation-errs">{this.state.errors["message"]}</span>
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




}






// <Row>
//   <Col></Col>
//   <Col xs={10}>
//    <p  className="validation-errs">err</p>
//    <p  className="validation-errs">err</p>
//    <p className="validation-errs">err</p>
//   </Col>
//   <Col></Col>
// </Row>
