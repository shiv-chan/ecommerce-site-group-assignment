import React, { useState, useEffect } from 'react';
import ItemDetail from './itemDetail';

export default function Home() {
    const [allData, setAllData] = useState(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            // setAllData(data)
            // console.log(allData)
            return data;
        })
    });
    

    console.log(allData)
    

    // fetchData();


    // useEffect(() => {
    //     if (!allData) {
    //         fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             setAllData(data)
    //             console.log(allData)
    //         })
    //     }
        
    // })
    
    return(
        <ItemDetail />
    )
}
