import React, { useState, useEffect } from 'react';
import CategorySection from './CategorySection';
import Navigation from './Navigation';

export default function Home() {
	const [allData, setAllData] = useState(JSON.parse(localStorage.getItem('allData')));
	const [itemCount, setItemCount] = useState(localStorage.getItem('totalCount'))

	const handleAddToCart = (event) => {
		const total = parseInt(localStorage.getItem('totalCount'))
		const preCount = parseInt(localStorage.getItem(event.target.offsetParent.id))
		localStorage.setItem(event.target.offsetParent.id, (1 + preCount))
        localStorage.setItem('totalCount', (total + 1))
        setItemCount(total + 1)
        // console.log(event.target.offsetParent.id)
	};

	return allData.length === 0 ? (
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
						items={allData.filter(item => item.category === 'electronics')}
						link="electronics"
						addToCart={handleAddToCart}
					/>
					<CategorySection
						category="Jewelery"
						items={allData.filter(item => item.category === 'jewelery')}
						link="jewelery"
						addToCart={handleAddToCart}
					/>
					<CategorySection
						category="Men's Clothing"
						items={allData.filter(item => item.category === "men's clothing")}
						link="men's clothing"
						addToCart={handleAddToCart}
					/>
					<CategorySection
						category="Women's Clothing"
						items={allData.filter(item => item.category === "women's clothing")}
						link="women's clothing"
						addToCart={handleAddToCart}
					/>
				</section>
			</>
		)
}
