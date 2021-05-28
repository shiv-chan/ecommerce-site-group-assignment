import React from 'react';

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
							<article key={props.items[num].id}>
								<img
									src={props.items[num].image}
									alt={props.items[num].title}
									style={{ width: '200px', height: '200px' }}
								/>
								<h2>{props.items[num].title}</h2>
								<h3>${props.items[num].price}</h3>
							</article>
						);
				  })
				: ''}
		</section>
	);
}
