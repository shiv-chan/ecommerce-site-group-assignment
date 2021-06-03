import React from 'react';
import ItemCard from './ItemCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CategorySection(props) {
	// pick unique three number, and return them as an array
	function randThreeNums(items) {
		if (items.length !== 0) {
			let nums = new Set();
			while (nums.size !== 3) {
				let randNum = Math.floor(Math.random() * items.length);
				nums.add(randNum);
			}

			return [...nums];
		}
	}

	console.log(randThreeNums(props.items));

	return (
		<section className="category-section">
			<h1 style={{ marginTop:'5%' }}>{props.category}</h1>
			<Container fluid>
				<Row className="justify-content-center align-items-center card-deck">
					<Col>
						<div className="card-deck">
							{randThreeNums(props.items)
								? randThreeNums(props.items).map((num) => {
										return (
											<ItemCard
												key={props.items[num].id}
												id={props.items[num].id}
												imgURL={props.items[num].image}
												title={props.items[num].title}
												imgSize={{
													width: '100%',
													height: '70%',
													'object-fit': 'contain',
												}}
												price={props.items[num].price}
												onClick={props.onClick}
											/>
										);
								  })
								: ''}
						</div>
					</Col>
					<Col md={'auto'}>
						<span>See More</span>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
