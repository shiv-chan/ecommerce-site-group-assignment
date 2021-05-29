import React, { useState, useEffect } from 'react';
import ItemCard from './itemCard';

export default function Home() {
	const [allData, setAllData] = useState([]);
	const [electronics, setElectronics] = useState([]);
	const [jewelery, setJewelery] = useState([]);
	const [menClothing, setMenClothing] = useState([]);
	const [womenClothing, setWomenClothing] = useState([]);

	function filterCategory(arr, categoryName) {
		return arr.filter((obj) => obj.category === categoryName);
	}

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => {
				setAllData(json);
				setElectronics(filterCategory(json, 'electronics'));
				setJewelery(filterCategory(json, 'jewelery'));
				setMenClothing(filterCategory(json, "men's clothing"));
				setWomenClothing(filterCategory(json, "women's clothing"));
			})
			.catch((err) => console.error(`Fetch Error: ${err}`));
	}, []);

	return allData.length === 0 ? (
		<>
			<header>
				<h1>E-commerce</h1>
			</header>
			<section>Loading...</section>
		</>
	) : (
		<>
			<header>
				<h1>E-commerce</h1>
			</header>
			<ItemCard category="Electronics" items={electronics} />
			<ItemCard category="Jewelery" items={jewelery} />
			<ItemCard category="Men's Clothing" items={menClothing} />
			<ItemCard category="Women's Clothing" items={womenClothing} />
		</>
	);
}
