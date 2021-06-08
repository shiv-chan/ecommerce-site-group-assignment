import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import ItemCard from './ItemCard';
import { Container } from 'react-bootstrap';

export default function Category(props) {
	const [items, setItems] = useState(JSON.parse(localStorage.getItem('allData')).filter(obj => obj.category === props.match.params.section));
    const [itemCount, setItemCount] = useState(localStorage.getItem('totalCount'))

	const handleAddToCart = (event) => {
		const total = parseInt(localStorage.getItem('totalCount'))
		const preCount = parseInt(localStorage.getItem(event.target.offsetParent.id))
		localStorage.setItem(event.target.offsetParent.id, (1 + preCount))
        localStorage.setItem('totalCount', (total + 1))
        setItemCount(total + 1)
	};

    return items.length === 0 ? (
                <>
                    <header>
                        <Navigation count={itemCount} />
                    </header>
                    <section>Loading...</section>
                </>
            ) : (
                <>
                    <header>
                        <Navigation count={itemCount} />
                </header>
                <h1 style={{margin: '100px 50px 50px', textTransform: 'capitalize'}}>{ props.match.params.section}</h1>
                    <Container
                        style={{
                            'display': 'grid',
                            'grid-template-columns': '1fr 1fr 1fr',
                            'grid-gap': '10px',
                            // 'margin-top': '100px'
                        }}
                    >
                        {items.map(data => {
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
                                addToCart={handleAddToCart}
                            />
                        })}

                    </Container>
    
                </>
            )
}