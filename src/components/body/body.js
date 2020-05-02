import React from 'react';
import './body.css';

//COMPONENTS
import BodyLeft from './body_left/body_left.js';
import BodyRight from './body_right/body_right.js';

const Body = () => {
    return (
        <div className="body">
            <BodyLeft className="body__left body__parts" />
            <BodyRight className="body__right body__parts" />
        </div>
    );
}

export default Body;