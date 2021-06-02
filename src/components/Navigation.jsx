import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faShoppingCart,
	faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
	return (
		<>
			<Container fluid className="p-0">
				<Navbar
					collapseOnSelect
					expand="lg"
					bg="dark"
					variant="dark"
					fixed="top"
					id="navbar"
				>
					<Navbar.Brand href="#">Cornerstone Mart</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#Electronics">Electronics</Nav.Link>
							<Nav.Link href="#Jewelery">Jewelery</Nav.Link>
							<Nav.Link href="#Men's Clothing">Men's clothing</Nav.Link>
							<Nav.Link href="#Women's Clothing">Women's clothing</Nav.Link>
							<Nav.Link id="icon" href="#">
								<FontAwesomeIcon icon={faShoppingCart} />
							</Nav.Link>
							<Nav.Link id="icon" href="#">
								<FontAwesomeIcon icon={faUserCircle} />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</>
	);
}
