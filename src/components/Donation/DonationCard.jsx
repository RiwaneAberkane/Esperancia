import { useState } from "react";
import "./DonationCard.css";

const DonationCard = ({ image, title, description, raised, goal }) => {
    const percentage = Math.min((raised / goal) * 100, 100);

    return (
        <div className="cardDonation">
            <img src={image} alt={title} className="card-image" />
            <div className="progress-container">
                <div className="progress-circle">
                    <svg className="progress-svg" viewBox="0 0 36 36">
                        <circle className="progress-bg" cx="18" cy="18" r="16" />
                        <circle
                            className="progress-bar"
                            strokeDasharray={`${percentage}, 100`}
                            cx="18"
                            cy="18"
                            r="16"
                        />
                    </svg>
                    <span className="progress-text">{Math.round(percentage)}%</span>
                </div>
            </div>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <p className="card-donation">Donation: ${raised.toLocaleString()} / ${goal.toLocaleString()}</p>
            <div className="card-buttons">
                <button className="donate-button">Donate Now</button>
                <button className="details-button">More Details</button>
            </div>
        </div>
    );
};

export default DonationCard;