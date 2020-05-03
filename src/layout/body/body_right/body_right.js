import React from 'react';
import './body_right.css';
import PokList from '../../../components/poklist/poklist';

const BodyRight = () => {
    return (
        <div className="body__right">
            <PokList />
        </div>
    );
}

export default BodyRight;