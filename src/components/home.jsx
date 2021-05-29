import React, { useState, useEffect } from 'react';
import ItemDetail from './itemDetail';

export default function Home() {
	const [allData, setAllData] = useState(null);
    const [test, setTest] = useState('Some Items')

    // fetchData();


    useEffect(async () => {
		const response = await fetch('https://fakestoreapi.com/products');
		const data = await response.json();

		// setAllData(data);

		// allData.map(item => console.log(item))
		// export default allData;
		// console.log(typeof JSON.stringify(data))
		console.log(data)
        
    }, [])
    
	return (
		<>
			{/* <p>{allData}</p> */}
			<ItemDetail
				product = {allData}
			/>
		</>
    )
}
