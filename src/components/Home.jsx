import React, { useState, useEffect } from 'react';
import CategorySection from './CategorySection';
import ItemDetail from './ItemDetail';
import Navigation from './Navigation';

export default function Home() {
	const [allData, setAllData] = useState([]);
	const [electronics, setElectronics] = useState([]);
	const [jewelery, setJewelery] = useState([]);
	const [menClothing, setMenClothing] = useState([]);
	const [womenClothing, setWomenClothing] = useState([]);
	const [showDetail, setShowDetail] = useState(false); // Switch with detail page.
	const [index, setIndex] = useState('');

	function filterCategory(arr, categoryName) {
		return arr.filter((obj) => obj.category === categoryName);
	}

	// Handle 'showDetail' status.
	function handleShowDetail(event) {
		setIndex(event.currentTarget.id);
		if (event.target.localName !== 'button') {
			setShowDetail(!showDetail)
		}
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
		
		for (let i = 0; i < allData.length; i++){
			localStorage.setItem((i+1), 0)
		}
		if (!localStorage.getItem('totalCount')) {
			
			localStorage.setItem('totalCount', 0)
		}

	}, []);

	return !showDetail ? (
		allData.length === 0 ? (
			<>
				<header>
					<Navigation count={localStorage.getItem('totalCount')} />
				</header>
				<section>Loading...</section>
			</>
		) : (
			<>
				<header>
					<Navigation count={localStorage.getItem('totalCount')} />
				</header>
				<section
					data-bs-spy="scroll"
					data-bs-target="#navbar"
					data-bs-offset="56"
					tabindex="0"
				>
					<CategorySection
						category="Electronics"
						items={electronics}
						onClick={(event) => handleShowDetail(event)}
						link="/electronics"
					/>
					<CategorySection
						category="Jewelery"
						items={jewelery}
						onClick={(event) => handleShowDetail(event)}
						link="/jewelery"
					/>
					<CategorySection
						category="Men's Clothing"
						items={menClothing}
						onClick={(event) => handleShowDetail(event)}
						link="/men"
					/>
					<CategorySection
						category="Women's Clothing"
						items={womenClothing}
						onClick={(event) => handleShowDetail(event)}
						link="/women"
					/>
				</section>
			</>
		)
	) : (
		<>
			<ItemDetail item={allData.filter((item) => item.id === index)[0]} />
		</>
	);
}
