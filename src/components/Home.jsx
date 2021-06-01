import React, { useState, useEffect } from 'react';
import CategorySection from './CategorySection';
import Navigation from './Navigation';

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
			<Navigation />
			<section>Loading...</section>
		</>
	) : (
		<>
			<Navigation />
			<CategorySection category="Electronics" items={electronics} />
			<CategorySection category="Jewelery" items={jewelery} />
			<CategorySection category="Men's Clothing" items={menClothing} />
			<CategorySection category="Women's Clothing" items={womenClothing} />
		</>
	);
}
