import React, {useState, useEffect} from 'react';
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

function ItemDetail(props) {
	const [itemCount, setItemCount] = useState(null)
	const [qty, setQty] = useState(1);

	const handleAddToCart = () => {
		setItemCount(qty)
	};

	return (
		<>
			<Navigation
				itemCount={itemCount}
			/>
		<Container fluid >
			<Row
				className='mx-auto justify-content-between'
				style={{
					'width': '80%',
					'height': '80vh',
					'margin-top': '120px'
				}}
			>
				<Col
					md={5}
					style={{
						// 'height': '100%'
					}}
				>
					<Row className='justify-content-center mb-4'>
						<Image
							style={{
								'max-width': '100%',
								'max-height': '500px'
							}}
							src={props.item.image} rounded
						/>
					</Row>
					<Row className='d-flex justify-content-between'  >
							<Image
								style={{
									'max-height': '200px',
									'max-width': '150px'
								}}
								src={props.item.image} rounded />
							<Image
								style={{
									'max-height': '200px',
									'max-width': '150px'
								}}
								src={props.item.image} rounded />
							<Image
								style={{
									'max-height': '200px',
									'max-width': '150px'
								}}
								src={props.item.image} rounded />
					</Row>
				</Col>
				<Col md={6}>
					<Card
						className='d-flex flex-column p-3'
						style={{
							'max-height': '750px'
						}}
					>
						<Card.Body>
							<Card.Title
								style={{
									'margin-bottom': '30px',
									'font-size': '30px'
									
								}}
							>{props.item.title}</Card.Title>
							<Card.Subtitle
								style={{
									'margin-bottom': '10px',
									'font-size': '15px'
								}}
							>{props.item.category}</Card.Subtitle>
							<Card.Text
								style={{
									'font-size': '30px'
								}}
							>${props.item.price}</Card.Text>
							<Card.Text
								style={{
									// 'display': 'inline-block',
									// 'width': '100%',
									// 'text-overflow': 'ellipsis',
									// 'white-space': 'nowrap',
									'overflow': 'hidden',
									'max-height': '250px',
									'font-size': '13px'
								}}
							>{props.item.description}</Card.Text>
						</Card.Body>
						<Form
							style={{
								'width': '180px',
								'margin': '20px'
							}}
						>
							<Form.Group controlId='qty' className='w-50'>
								<Form.Label>Qty: </Form.Label>
								<Form.Control
									size='sm'
									type='number'
									defaultValue={1}
									onChange={() => setQty()}
								/>
							</Form.Group>
							{(props.item.category === "men's clothing" || props.item.category === "women's clothing") &&
								<Form.Group controlId="size">
									<Form.Label>Size: </Form.Label>
									<Form.Control as="select" size='sm' defaultValue='m'>
										<option value="xs">XS</option>
										<option value="s">S</option>
										<option value="m">M</option>
										<option value="l">L</option>
										<option value="xl">XL</option>
									</Form.Control>
									
								</Form.Group>
							}
						</Form>
						<Button
							style={{
								'width': '180px',
								'align-self': 'flex-end',
								'margin': '20px'
							}}
							onClick={() => handleAddToCart()}
						>Add to cart</Button>
					</Card>
				</Col>
			</Row>
			</Container>
			</>
	);
}

export default ItemDetail;