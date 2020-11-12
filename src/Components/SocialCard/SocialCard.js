import React from "react";
import "./SocialCard.css";

function SocialCard({ link, title, icoImg }) {
    const handleClick = () => {
        window.location = link;
    };
    return (
        <div className="social-card" onClick={() => handleClick()}>
            <img src={icoImg} alt="social" />
            <p> {title} </p>
        </div>
    );
}

export default SocialCard;
