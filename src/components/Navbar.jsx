import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaShoppingCart,FaUserCircle } from 'react-icons/fa';


export default function navbar() {
  return (
    <div className="navbar">
      <Navbar collapseOnSelect  expand='1g' bg="dark" variant="dark">
        <Navbar.Brand href="#home">Cornerstone Mart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Electronics">Electronics</Nav.Link>
            <Nav.Link href="#Jewelery">Jewelery</Nav.Link>
            <Nav.Link href="#Men">Men`s clothing</Nav.Link>
            <Nav.Link href="#Women">Women`s clothing</Nav.Link>
            <Nav.Link id='icon' href='#'><FaShoppingCart /></Nav.Link>
            <Nav.Link id='icon' href='#'><FaUserCircle /></Nav.Link>
            </Nav>


        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
