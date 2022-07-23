import React from 'react';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import act from './act.png';



function Topbar() {
  return (
  	<Navbar expand="lg" bg="light" className="fixed-top">
      <Container>
       <Navbar.Brand href="#"><img src={act} alt="logo"/></Navbar.Brand>
         <Nav classNameName="ms-auto">
            <Nav.Link href="#home">{<i className="fa fa-user-circle fs-2"></i>}</Nav.Link>
            
          </Nav>
      </Container>
   </Navbar>

  );
}

export default Topbar;