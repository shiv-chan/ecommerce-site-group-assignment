import './App.css';
import Home from './components/Home';
import Electronics from './components/Electronics';
import Jewelery from './components/Jewelery';
import Men from './components/Men';
import Women from './components/Women';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/electronics" component={Electronics} />
					<Route path="/jewelery" component={Jewelery} />
					<Route path="/men" component={Men} />
					<Route path="/women" component={Women} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
