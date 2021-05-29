import React from 'react';

export default function ItemCard(props) {
	// pick unique three number, and return them as an array
	function randThreeNums(items) {
		let nums = new Set();
		while (nums.size !== 3) {
			let randNum = Math.floor(Math.random() * items.length);
			nums.add(randNum);
		}

		return [...nums];
	}

	console.log(randThreeNums(props.items));

	return (
		<section className="category-section">
			<h1>{props.category}</h1>
		</section>
	);
}
