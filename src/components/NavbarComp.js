import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { LinkContainer } from "react-router-bootstrap";

function NavbarComp(){
	return (
		<div>
			<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  			<Navbar.Brand href="#home" style={{marginLeft: 30}}><b>Productivity Hub</b></Navbar.Brand>
  			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
  			<Navbar.Collapse id="responsive-navbar-nav">
    		<Nav style={{marginRight: 100}} className="ms-auto">
				<LinkContainer to ="/">
				<Nav.Link>Home</Nav.Link>
				</LinkContainer>
				<LinkContainer to="/aboutme">
      			<Nav.Link>Tasks</Nav.Link>
				</LinkContainer>
				<LinkContainer to="/pomo">
      			<Nav.Link>Pomodoro</Nav.Link>
				</LinkContainer>
    		</Nav>
  			</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default NavbarComp;