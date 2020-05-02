import React from 'react';
import './App.css';

//COMPONENTS
import Header from './components/header/header.js';
import Body from './components/body/body.js';

const App = () => {
    return (
        <div className="main">
            < Header />
            < Body />
        </div>
    );
}

export default App;