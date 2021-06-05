import React, { useState } from 'react';
import {
	Button,
	Image,
	Container,
	Row,
	Col,
	Form,
	Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Clamp from 'react-multiline-clamp';

function ItemDetail(props) {
	const [itemCount, setItemCount] = useState(localStorage.getItem('totalCount'))
	const [qty, setQty] = useState(1);

	const handleAddToCart = () => {
		const total = parseInt(localStorage.getItem('totalCount'))
		const preCount = parseInt(localStorage.getItem(props.item.id))
		localStorage.setItem(props.item.id, (qty + preCount))
		localStorage.setItem('totalCount', (total + qty))
		setItemCount((total + qty))
	};

	const handleCountOnChange = (event) => {
		setQty(parseInt(event.target.value))
	}

	return (
		<>
			<Navigation count={itemCount} />
			<Container fluid >
				<Row
					className='mx-auto justify-content-between'
					style={{
						width: '80%',
						height: '80vh',
						marginTop: '120px'
					}}
				>
					<Col md={5} >
						<Row className='justify-content-center mb-4'>
							<Image
								style={{
									maxWidth: '100%',
									maxHeight: '500px'
								}}
								src={props.item.image} rounded
							/>
						</Row>
						<Row className='d-flex justify-content-between'  >
								<Image
									style={{
										maxHeight: '200px',
										maxWidth: '150px'
									}}
									src={props.item.image}
									rounded
								/>
								<Image
									style={{
										maxHeight: '200px',
										maxWidth: '150px'
									}}
									src={props.item.image}
									rounded
								/>
								<Image
									style={{
										maxHeight: '200px',
										maxWidth: '150px'
									}}
									src={props.item.image} rounded />
						</Row>
					</Col>
					<Col md={6}>
						<Card
							className="d-flex flex-column p-3"
							style={{
								minHeight: '750px',
							}}
						>
							<Card.Body>
								<Card.Title
									style={{
										'margin-bottom': '30px',
										'font-size': '30px',
									}}
								>
									{props.item.title}
								</Card.Title>
								<Card.Subtitle
									style={{
										'margin-bottom': '10px',
										'font-size': '15px',
									}}
								>
									{props.item.category}
								</Card.Subtitle>
								<Card.Text
									style={{
										'font-size': '30px',
									}}
								>
									${props.item.price}
								</Card.Text>
								<Card.Text
									style={{
										'max-height': '250px',
										'font-size': '13px',
									}}
								>
									<Clamp
										lines={5}
										withToggle
										texts={{ showMore: 'show more', showLess: 'show less' }}
									>
										{props.item.description}
									</Clamp>
								</Card.Text>
							</Card.Body>
							<Form
								style={{
									width: '180px',
									margin: '20px',
								}}
							>
								<Form.Group controlId="qty" className="w-50">
									<Form.Label>Qty: </Form.Label>
									<Form.Control
										size="sm"
										type="number"
										defaultValue={1}
										onChange={(event) => handleCountOnChange(event)}
									/>
								</Form.Group>
								{(props.item.category === "men's clothing" ||
									props.item.category === "women's clothing") && (
									<Form.Group controlId="size">
										<Form.Label>Size: </Form.Label>
										<Form.Control as="select" size="sm" defaultValue="m">
											<option value="xs">XS</option>
											<option value="s">S</option>
											<option value="m">M</option>
											<option value="l">L</option>
											<option value="xl">XL</option>
										</Form.Control>
									</Form.Group>
								)}
							</Form>
							<Button
								style={{
									width: '180px',
									alignSelf: 'flex-end',
									margin: '20px',
								}}
								onClick={() => handleAddToCart()}
							>
								Add to cart
							</Button>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	)
};

export default ItemDetail;
