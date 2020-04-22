import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import SearchParams from './SearchParams.js';
import Details from './Details.js';
import ThemeContext from './ThemeContext';

const App = () => {
	const themeHook = useState('peru');
	return (
		<React.StrictMode>
			<ThemeContext.Provider value={themeHook}>
				<div>
					<header>
						<Link to='/'>Adopt me!</Link>
					</header>
					<Router>
						<SearchParams path='/' />
						<Details path='/details/:id' />
					</Router>
				</div>
			</ThemeContext.Provider>
		</React.StrictMode>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
