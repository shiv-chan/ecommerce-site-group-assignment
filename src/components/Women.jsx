import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import ItemCard from './ItemCard';
import ItemDetail from './ItemDetail';
import { Container } from 'react-bootstrap';

export default function Women(props) {
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
				setWomenClothing(filterCategory(json, "women's clothing"));
			})
            .catch((err) => console.error(`Fetch Error: ${err}`));
	}, []);

    return !showDetail ? (
        womenClothing.length === 0 ? (
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
                    <Container
                        style={{
                            'display': 'grid',
                            'grid-template-columns': '1fr 1fr 1fr',
                            'grid-gap': '10px',
                            'margin-top': '100px'
                        }}
                    >
                        {womenClothing.map(data => {
                            return <ItemCard
                                key={data.id}
                                id={data.id}
                                imgURL={data.image}
                                title={data.title}
                                imgSize={{
                                    width: '100%',
                                    'max-height': '250px',
                                    'object-fit': 'contain',
                                }}
                                price={data.price}
                                onClick={handleShowDetail}
                                addToCart={handleAddToCart}
                            />
                        })}

                    </Container>
    
                </>
            )
        
	    ) : (
            <>
                <ItemDetail item={womenClothing.filter((item) => item.id == index)[0]} />
            </>
        );
}
