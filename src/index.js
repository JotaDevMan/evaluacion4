import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import NavBar from './Navbar';
import PostIt from './Post-it';

function App() {
    const [postIts, setPostIts] = React.useState([]);

    const addPostIt = (title, description, important) => {
        setPostIts([...postIts, { id: Date.now(), title, description, important }]);
    };

    return (
        <div className='container '>
            <NavBar onAddPostIt={addPostIt}></NavBar>
            <div className="container">
                <div className="grid-container">
                    {postIts.map(postIt => (
                        <div key={postIt.id} className="grid-item">
                            <PostIt title={postIt.title} description={postIt.description} important={postIt.important}></PostIt>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
