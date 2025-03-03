import React, { useState, useEffect } from 'react';
import './NonProfit.css';

const NonProfit = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // On récupère les données du fichier JSON
        fetch('../data/data.json')
            .then((response) => response.json())
            .then((data) => setCards(data));
    }, []);

    return (
        <div className="container">
            <div className="headerNonProfit">
                <h3 className="title">We are non-profit Charity & NGO Organization</h3>
            </div>
            <div className="cards-wrapper">
                <div className="cards-container">
                    {cards.map((card) => (
                        <div key={card.title} className="card">
                            <img src={card.image} alt={card.title} className="card-image" />
                            <h4>{card.title}</h4>
                            <h5>{card.subtitle}</h5>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NonProfit;
