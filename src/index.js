import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCwVr_w7x4Fqy8BhmW9qfMOM0WMb7xpNoo';


// Create a new component. This component should produce some html.
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
