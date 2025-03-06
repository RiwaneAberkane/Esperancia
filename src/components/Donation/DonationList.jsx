import React from "react";
import DonationCard from "./DonationCard";
import donationsData from "../../data/donations.json";
import "./DonationList.css";

const DonationList = () => {
    return (
        <div className="donation-list">
            <h3 className="title-donation-list">Recen<span className="span-donation-list">t C</span>auses</h3>
            <div className="donation-list-card">
                {donationsData.map((donation, index) => (
                    <DonationCard key={index} {...donation} />
                ))}
            </div>
            <div className="center-button">
                <button className="see-all-causes">See all causes</button>
            </div>
        </div>
    );
};

export default DonationList;
