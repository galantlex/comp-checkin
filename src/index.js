import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import SearchForm from './searchform';

ReactDOM.render(
		<SearchForm displaySearchResults = {(res) => console.log(res)} url='http://localhost:3001/api/dancers'/>,
		document.getElementById('root')
		);
registerServiceWorker();
