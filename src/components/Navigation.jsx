import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
<<<<<<< HEAD
import './Navigation.css';
=======
>>>>>>> navigation-review
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
<<<<<<< HEAD
			<Container>
=======
			<Container fluid className="p-0">
>>>>>>> navigation-review
				<Navbar
					collapseOnSelect
					expand="lg"
					bg="dark"
					variant="dark"
<<<<<<< HEAD
					fixed="top"
=======
					sticky="top"
>>>>>>> navigation-review
				>
					<Navbar.Brand href="#home">Cornerstone Mart</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#Electronics">Electronics</Nav.Link>
							<Nav.Link href="#Jewelery">Jewelery</Nav.Link>
							<Nav.Link href="#Men">Men's clothing</Nav.Link>
							<Nav.Link href="#Women">Women's clothing</Nav.Link>
<<<<<<< HEAD
							<Nav.Link id="Cart" href="#Cart">
								<FontAwesomeIcon icon={faShoppingCart} />
							</Nav.Link>
							<Nav.Link id="User" href="#User">
=======
							<Nav.Link id="icon" href="#">
								<FontAwesomeIcon icon={faShoppingCart} />
							</Nav.Link>
							<Nav.Link id="icon" href="#">
>>>>>>> navigation-review
								<FontAwesomeIcon icon={faUserCircle} />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</>
	);
<<<<<<< HEAD
}
=======
}
>>>>>>> navigation-review
