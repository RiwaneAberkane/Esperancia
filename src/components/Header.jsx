import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <ul>
                    <li><h2>ESPE<span>RANCIA</span></h2></li>
                </ul>

                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#home">Blog</a></li>
                    <li><a href="#about">Credit</a></li>
                </ul>
            </nav>
            <div className="header-content">
                <h1 className="header-title">One effort, endless possibilities</h1>
                <p className="header-text">Aidons ensemble à construire un avenir meilleur pour les enfants.</p>
            </div>
        </header>
    );
};

export default Header;
