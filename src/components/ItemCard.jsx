import React from 'react';

export default function ItemCard(props) {
	return (
		<article key={props.key}>
			<img src={props.imgURL} alt={props.title} style={props.imgSize} />
			<h2>{props.title}</h2>
			<h3>{props.price}</h3>
		</article>
	);
}