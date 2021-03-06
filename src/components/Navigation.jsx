import React, { useState } from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';

export default function Navigation(props) {
	const [isToggle, setToggle] = useState(false);

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
					<LinkContainer to="/">
						<Navbar.Brand href="#">Cornerstone Mart</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse
						id="responsive-navbar-nav"
						style={{ textAlign: 'left' }}
					>
						<Nav className="me-auto">
							<Nav.Link href="#Electronics">Electronics</Nav.Link>
							<Nav.Link href="#Jewelery">Jewelery</Nav.Link>
							<Nav.Link href="#Men's Clothing">Men's Clothing</Nav.Link>
							<Nav.Link href="#Women's Clothing">Women's Clothing</Nav.Link>
							<Nav.Link id="Cart">
								<Cart isToggle={isToggle} setToggle={setToggle} count={props.count}/>
							</Nav.Link>
							<Nav.Link id="User">
								<FontAwesomeIcon icon={faUserCircle} />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</>
	);
}
