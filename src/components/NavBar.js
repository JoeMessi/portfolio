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

  // func that returns Nav.Items
  // I alternate the use of href and onClick depending on if WorkDetails component is mounted,
  // this so we use the scrolling func only when we actually can, which is only in '/'.
  makeNavItems = (anchor, Ref, text, lastNavItem = null) => {
    return (
      <Nav.Item id={lastNavItem}>
        <Nav.Link
          onSelect={this.closeNav}
          href={this.props.isWorkDetailsCompMounted ? anchor : null}
          onClick={this.props.isWorkDetailsCompMounted ? null : () => { this.props.scrollTo(Ref.current)}}
          eventKey="link-1">{text}
        </Nav.Link>
      </Nav.Item>
    );
  }

   render() {
     return (
      <Navbar
        onToggle={this.setNavExpanded}
        expanded={this.state.navExpanded} id="nav" expand="" fixed="top">

         <Navbar.Brand
           href={this.props.isWorkDetailsCompMounted ? '/#anchor-home' : null}
           onClick={this.props.isWorkDetailsCompMounted ? null : () => { this.props.scrollTo(this.props.jRef.current); this.closeNav(); }}>J
         </Navbar.Brand>

         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse ref={this.props.toggleRef} id="basic-navbar-nav">
           <Nav className="mr-auto">
             {this.makeNavItems("/#anchor-student", this.props.studentRef, "As a student")}
             {this.makeNavItems("/#anchor-worker", this.props.workerRef, "As a worker")}
             {this.makeNavItems("/#anchor-about", this.props.aboutRef, "About me")}
             {this.makeNavItems("/#anchor-say-hi", this.props.sayHiRef, "Say hi", "last-nav-item")}
           </Nav>
         </Navbar.Collapse>
       </Navbar>
     );
   }

}
