import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
import './Navigation.css';
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
				>
					<Navbar.Brand href="#home">Cornerstone Mart</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#Electronics">Electronics</Nav.Link>
							<Nav.Link href="#Jewelery">Jewelery</Nav.Link>
							<Nav.Link href="#Men">Men's clothing</Nav.Link>
							<Nav.Link href="#Women">Women's clothing</Nav.Link>
							<Nav.Link id="Cart" href="#Cart">
								<FontAwesomeIcon icon={faShoppingCart} />
							</Nav.Link>
							<Nav.Link id="User" href="#User">
								<FontAwesomeIcon icon={faUserCircle} />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</>
	);
}
