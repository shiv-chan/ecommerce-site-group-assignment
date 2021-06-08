import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import ItemDetail from './components/ItemDetail';
import Category from './components/Category';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
	// const [dataLength, setDataLength] = useState(0);

	useEffect(() => {
		// Fetch and store all data in localStorage.
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => {
				localStorage.setItem('allData', JSON.stringify(json));

				if (!localStorage.getItem('totalCount')) {
					
					// Creat items' count localStorage.
					for (let i = 1; i <= json.length; i++){
						localStorage.setItem(i.toString(), 0)
					}
					localStorage.setItem('totalCount', 0)
				}
			})
			.catch((err) => console.error(`Fetch Error: ${err}`));
		

	}, [])

	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path='/category/:section' component={Category} />
					<Route path="/detail/:id" exact component={ItemDetail} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
