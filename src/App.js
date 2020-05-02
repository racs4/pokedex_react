import React from 'react';
import './App.css';

//COMPONENTS
import Header from './layout/header/header.js';
import Body from './layout/body/body.js';

const App = () => {
    return (
        <div className="main">
            < Header />
            < Body />
        </div>
    );
}

export default App;