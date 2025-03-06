import React from "react";
import DonationCard from "./DonationCard";
import donationsData from "../../data/donations.json";
import "./DonationList.css";

const DonationList = () => {
    return (
        <div className="donation-list">
            {donationsData.map((donation, index) => (
                <DonationCard key={index} {...donation} />
            ))}
        </div>
    );
};

export default DonationList;
