import React from 'react';
import ItemCard from './ItemCard.jsx';

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
			<h1>{props.category}</h1>
			{randThreeNums(props.items)
				? randThreeNums(props.items).map((num) => {
						return (
							<ItemCard
								key={props.items[num].id}
								imgURL={props.items[num].image}
								title={props.items[num].title}
								imgSize={{ width: '200px', height: '200px' }}
								price={props.items[num].price}
							/>
						);
				  })
				: ''}
		</section>
	);
}