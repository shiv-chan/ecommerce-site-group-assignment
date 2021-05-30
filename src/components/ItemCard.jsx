import React,{useState} from 'react';
// import {Card} from 'react-bootstrap'

export default function ItemCard(props) {
	// const [id, setId] = useState(props.id);

	return (
		<div key={props.key} id={props.id} style={{display: 'block', cursor: 'pointer'}} onClick={props.onClick}>
			<img src={props.imgURL} alt={props.title} style={props.imgSize} />
			<h2>{props.title}</h2>
			<h3>{props.price}</h3>
		</div>
	);
}
