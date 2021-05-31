import React from 'react';

export default function ItemCard(props) {
	return (
			<img src={props.imgURL} alt={props.title} style={props.imgSize} />
			<h2>{props.title}</h2>
			<h3>{props.price}</h3>
		</article>
	);
}