import React from 'react';
import '../styles/index.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="app-header">
            <div className="header-container">
                <Link to="/" className="app-logo">
                    <strong>Contact App Bd</strong> 
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
