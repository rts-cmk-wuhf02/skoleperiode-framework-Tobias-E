import React from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams.js';

const App = () => {
	return (
		<div>
			<h1 className='something-important'>Adopt me!</h1>
			<SearchParams />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
