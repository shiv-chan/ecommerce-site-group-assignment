import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import ItemCard from './ItemCard';
import ItemDetail from './ItemDetail';
import { Container } from 'react-bootstrap';

export default function Men(props) {
	const [menClothing, setMenClothing] = useState([]);
	const [showDetail, setShowDetail] = useState(false); // Switch with detail page.
	const [index, setIndex] = useState('');

	function filterCategory(arr, categoryName) {
        return arr.filter((obj) => obj.category === categoryName);
        
	}

	// Handle 'showDetail' status.
	function handleShowDetail(event) {
		setIndex(event.currentTarget.id);
        setShowDetail(!showDetail);
	}

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => {
				setMenClothing(filterCategory(json, "men's clothing"));
			})
            .catch((err) => console.error(`Fetch Error: ${err}`));
	}, []);

    return !showDetail ? (
        menClothing.length === 0 ? (
                <>
                    <header>
                        <Navigation />
                    </header>
                    <section>Loading...</section>
                </>
            ) : (
                <>
                    <header>
                        <Navigation />
                    </header>
                    <Container
                        style={{
                            'display': 'grid',
                            'grid-template-columns': '1fr 1fr 1fr',
                            'grid-gap': '10px',
                            'margin-top': '100px'
                        }}
                    >
                        {menClothing.map(data => {
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
                            />
                        })}

                    </Container>
    
                </>
            )
        
	    ) : (
            <>
                <ItemDetail item={menClothing.filter((item) => item.id == index)[0]} />
            </>
        );
}
