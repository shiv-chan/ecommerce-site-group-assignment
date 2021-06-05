import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ItemCard(props) {
	const handleAddToCart = () => {
		const total = parseInt(localStorage.getItem('totalCount'))
		const preCount = parseInt(localStorage.getItem(props.id))
		localStorage.setItem(props.id, (1 + preCount))
		localStorage.setItem('totalCount', (total + 1))
	};

	return (
		<Card
			key={props.key}
			id={props.id}
			className="shadow-sm"
			style={{ cursor: 'pointer', height: '100%', margin: '0 0.5rem' }}
			onClick={props.onClick}
		>
			<Card.Img
				className="p-3"
				variant="top"
				src={props.imgURL}
				alt={props.title}
				style={props.imgSize}
			/>
			<Card.Body className="d-flex flex-column justify-content-center">
				<Card.Title
					style={{
						'font-size': '100%',
						'text-overflow': 'ellipsis',
						'white-space': 'nowrap',
						overflow: 'hidden',
						margin: 0,
					}}
				>
					{props.title}
				</Card.Title>
				<Card.Subtitle className="m-0 text-muted">${props.price}</Card.Subtitle>
				<Button
					onclick="addToCart()"
					variant="primary"
					className="d-block mx-auto rounded-pill"
					onClick={() => handleAddToCart()}
				>
					Add to Cart
				</Button>
			</Card.Body>
		</Card>
	);
}
