import React from "react";
import "./SectionBlack.css";

function SectionBlack({ title, text, imgSrc }) {
    return (
        <section className="section-black" id="black">
            <div className="black-content">
                <div className="black-block">
                    <h2> {title} </h2>
                    <p> {text} </p>
                </div>
                <div className="black-image">
                    <img src={imgSrc} alt="logo" />
                </div>
            </div>
        </section>
    );
}

export default SectionBlack;
