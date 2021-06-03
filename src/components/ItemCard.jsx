import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function ItemCard(props) {
	return (
		<Card
			key={props.key}
			id={props.id}
			className="shadow-sm"
			style={{ cursor: 'pointer' }}
			onClick={props.onClick}
		>
			<Card.Img
				className="p-3"
				variant="top"
				src={props.imgURL}
				alt={props.title}
				style={props.imgSize}
			/>
			<Card.Body className="d-flex flex-column justify-content-around">
				<Card.Title style={{ 'font-size': '100%' }}>{props.title}</Card.Title>
				<div>
					<Card.Subtitle className="mb-2 text-muted">
						${props.price}
					</Card.Subtitle>
					<Button type="button" onclick="addToCart()" variant="primary" className="d-block m-auto rounded-pill">
						Add to Cart
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
}
