import React from 'react';
import './post-it.css';

export default function PostIt({ title, description, important }){
    const rotation = Math.random() < 0.5 ? -10 : 10;
    const cardColor = important ? 'rgb(255, 254, 205)' : 'rgb(255, 254, 205)'; 

    return (
        <div className="post-it-card " style={{ transform: `rotate(${rotation}deg)`, backgroundColor: cardColor }}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

