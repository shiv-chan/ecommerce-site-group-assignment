import React from 'react';
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

function ItemDetail(props) {
	const handleAddToCart = () => {};

	return (
		<div className="detailPage">
			<Container>
				<Row>
					<Col>
						<Row>
							<Image
								style={{ width: '300px', border: '2px solid black' }}
								src={props.item.image}
								rounded
							></Image>
						</Row>
						<Row>
							<Image
								style={{ width: '100px', border: '2px solid black' }}
								src={props.item.image}
								rounded
							></Image>
							<Image
								style={{ width: '100px', border: '2px solid black' }}
								src={props.item.image}
								rounded
							></Image>
							<Image
								style={{ width: '100px', border: '2px solid black' }}
								src={props.item.image}
								rounded
							></Image>
						</Row>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title>{props.item.title}</Card.Title>
								<Card.Subtitle>{props.item.category}</Card.Subtitle>
								<Card.Text>${props.item.price}</Card.Text>
							</Card.Body>
							<Form>
								<Form.Group controlId="size">
									<Form.Label>Size: </Form.Label>
									<Form.Control as="select" placeholder="Select a size....">
										<option value="xs">XS</option>
										<option value="s">S</option>
										<option value="m">M</option>
										<option value="l">L</option>
										<option value="xl">XL</option>
									</Form.Control>
								</Form.Group>
							</Form>
							<Button onClick={() => handleAddToCart()}>Add to cart</Button>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default ItemDetail;
