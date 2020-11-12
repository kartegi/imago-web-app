import React from "react";
import "./Burger.css";

function Burger() {
    

        function handleClick() {
            const menuIcon = document.querySelector(".burger__menu-icon");
            menuIcon.classList.toggle("burger__menu-icon_active");
        }

    return (
        <div className="burger" onClick={() => handleClick()}>
            <div className="burger__menu-icon"></div>
        </div>
    );
}

export default Burger;
