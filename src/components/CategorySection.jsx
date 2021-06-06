import React from 'react';
import ItemCard from './ItemCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

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

	// console.log(randThreeNums(props.items));

	return (
		<section id={props.category} style={{ 'padding-top': '56px' }}>
			<LinkContainer to={props.link} style={{ cursor: 'pointer' }}>
				<h1 className="m-2">{props.category}</h1>
			</LinkContainer>
			<Row xs={1} md={2} lg={4}>
				{randThreeNums(props.items)
					? randThreeNums(props.items).map((num) => {
							return (
								<Col style={{ margin: '1rem 0' }}>
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
										onClick={()=>{
											var arr = props.cart.concat({title:props.items[num].title, price:props.items[num].price,
												id:props.items[num].id});
											props.setCart(arr);
										}}
										// onClick={props.onClick}
									/>
								</Col>
							);
					  })
					: ''}
				<Col className="align-self-center text-center">
					<Link to={props.link}>See More</Link>
				</Col>
			</Row>
		</section>
	);
}
