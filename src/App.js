import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import SearchParams from './SearchParams.js';
import Details from './Details.js';

const App = () => {
	return (
		<React.StrictMode>
			<div>
				<header>
					<Link to='/'>Adopt me!</Link>
				</header>
				<Router>
					<SearchParams path='/' />
					<Details path='/details/:id' />
				</Router>
			</div>
		</React.StrictMode>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
