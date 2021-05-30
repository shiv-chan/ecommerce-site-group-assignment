import React,{useState} from 'react';

export default function ItemCard(props) {
	return (
		<div key={props.key} id={props.id} style={{display: 'block', cursor: 'pointer'}} onClick={props.onClick}>
			<img src={props.imgURL} alt={props.title} style={props.imgSize} />
			<h2>{props.title}</h2>
			<h3>{props.price}</h3>
		</div>
	);
}
