import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';

export default class NotFound extends Component {

  // setState in App -> NotFound component is mounted
  componentDidMount() {
    this.props.handleNotFoundCompState(true);
  }
  // setState in App -> NotFound component is NOT mounted
  componentWillUnmount(){
    this.props.handleNotFoundCompState(false);
  }

  render() {
    return (
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
    );
  }

}
