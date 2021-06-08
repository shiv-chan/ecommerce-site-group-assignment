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
	const [itemCount, setItemCount] = useState(localStorage.getItem('totalCount'))

	const handleAddToCart = (event) => {
		const total = parseInt(localStorage.getItem('totalCount'))
		const preCount = parseInt(localStorage.getItem(event.target.offsetParent.id))
		localStorage.setItem(event.target.offsetParent.id, (1 + preCount))
        localStorage.setItem('totalCount', (total + 1))
        setItemCount(total + 1)
        // console.log(event.target.offsetParent.id)
	};

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
			// Set and reset every count depends on 'totalCount'.
		if (!localStorage.getItem('totalCount')) {
			
			localStorage.setItem('totalCount', 0)
		}

	}, []);

	return !showDetail ? (
		allData.length === 0 ? (
			<>
				<header>
					<Navigation count={itemCount} data={allData} />
				</header>
				<section>Loading...</section>
			</>
		) : (
			<>
				<header>
						<Navigation count={itemCount} data={allData}/>
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
						addToCart={handleAddToCart}
					/>
					<CategorySection
						category="Jewelery"
						items={jewelery}
						onClick={(event) => handleShowDetail(event)}
						link="/jewelery"
						addToCart={handleAddToCart}
					/>
					<CategorySection
						category="Men's Clothing"
						items={menClothing}
						onClick={(event) => handleShowDetail(event)}
						link="/men"
						addToCart={handleAddToCart}
					/>
					<CategorySection
						category="Women's Clothing"
						items={womenClothing}
						onClick={(event) => handleShowDetail(event)}
						link="/women"
						addToCart={handleAddToCart}
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
