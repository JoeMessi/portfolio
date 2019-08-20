import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class NavBar extends Component {
  // nav expanded initial state
  state = {
    navExpanded: false
  }
  // set navExpanded to expanded
  setNavExpanded = (expanded) => {
  this.setState({ navExpanded: expanded });
  }
  // set navExpanded to false
  closeNav = () => {
    this.setState({ navExpanded: false });
  }

   render() {
     return (
     <Navbar onToggle={this.setNavExpanded}
             expanded={this.state.navExpanded} id="nav" expand="lg" fixed="top">

       <Navbar.Brand onClick={() => {this.props.scrollTo(this.props.jRef.current); this.closeNav();}}>J</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse ref={this.props.toggleRef} id="basic-navbar-nav">
         <Nav className="mr-auto">
           <Nav.Item>
             <Nav.Link onSelect={this.closeNav} onClick={() => {this.props.scrollTo(this.props.studentRef.current)}} eventKey="link-1">As a student</Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link onSelect={this.closeNav} onClick={() => {this.props.scrollTo(this.props.workerRef.current)}} eventKey="link-1">As a worker</Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link onSelect={this.closeNav} onClick={() => {this.props.scrollTo(this.props.aboutRef.current)}} eventKey="link-2">About me</Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link onSelect={this.closeNav} onClick={() => {this.props.scrollTo(this.props.sayHiRef.current)}} eventKey="link-3">Say hi</Nav.Link>
           </Nav.Item>
         </Nav>
       </Navbar.Collapse>
   </Navbar>
     );
   }


}
