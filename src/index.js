import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import NavBar from './Navbar';
import PostIt from './Post-it';
import { v4 as uuid } from 'uuid';

function App() {
    const [postIts, setPostIts] = useState([]);

    useEffect(() => {
        const storedPostIts = JSON.parse(localStorage.getItem('post-its'));
        if (storedPostIts) {
            setPostIts(storedPostIts);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('post-its', JSON.stringify(postIts));
    }, [postIts]);

    const agregarNota = (titulo, descripcion, importante) => {
        const rotation = Math.random() < 0.5 ? -10 : 10;
        setPostIts([...postIts, { id:uuid(), titulo, descripcion, importante, rotation }]);
    };

    const eliminarNota = (id) => {
        setPostIts(postIts.filter(postIt => postIt.id !== id));
    };

    return (
        <div className='container'>
            <NavBar agregarNota={agregarNota}></NavBar>
            <div className="container">
                <div className="grid-container">
                    {postIts.map(postIt => (
                        <div key={postIt.id} className="grid-item">
                            <PostIt 
                                id={postIt.id}
                                title={postIt.titulo} 
                                description={postIt.descripcion} 
                                important={postIt.importante}
                                rotation={postIt.rotation}
                                eliminarNota={eliminarNota}
                            ></PostIt>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
