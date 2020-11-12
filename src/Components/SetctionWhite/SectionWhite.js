import React from "react";
import "./SectionWhite.css";

function SectionWhite({ title, text, imgSrc }) {
    return (
        <section className="section-white" id="white">
            <div className="white-content">
                <div className="text-block">
                    <h2> {title} </h2>
                    <p> {text} </p>
                </div>
                <div className="white-image">
                    <img src={imgSrc} alt="logo" />
                </div>
            </div>
        </section>
    );
}

export default SectionWhite;
