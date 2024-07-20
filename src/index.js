import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import NavBar from './Nevbar';
import PostIt from './Post-it';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='container mx-1 my-3'>
        <NavBar></NavBar>
    
        <div className="container">
            <div className="row">
                <PostIt></PostIt>
            </div>
        </div>
    </div>
    
);
