import React from 'react';
import './post-it.css';

export default function PostIt({ id, title, description, important, rotation, eliminarNota }) {
    const cardColor = important ? 'rgb(235, 112, 97)' : 'rgb(255, 254, 205)';

    return (
        <div className="post-it-card" style={{ transform: `rotate(${rotation}deg)`, backgroundColor: cardColor }}>
            <button className="delete-button" onClick={() => eliminarNota(id)}>X</button>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};
