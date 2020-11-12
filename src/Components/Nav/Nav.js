import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../../img/logo1.png";
import Burger from "../Burger/Burger";

function Nav() {
    const [show, handleShow] = useState(false);
    let fullNav = false;

    useEffect(() => {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);

    function handleClick() {

        const nav = document.querySelector(".nav");
        nav.classList.toggle("nav-full");
    }

    return (
        <div className={`nav-wrapper ${show && "nav-white"}`}>
            <div className="logo-wrapper">
                <a href="#">
                    <img className="image-logo" src={logo} />
                </a>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <a href="#white">ABOUT</a>
                    </li>
                    <li>
                        <a href="#black">TEAM</a>
                    </li>
                    <li>
                        <a href="#social">SOCIAL</a>
                    </li>
                </ul>
            </nav>
            <div className="burger-continer" onClick={() => handleClick()}>
                <Burger className="burger" />
            </div>
        </div>
    );
}

export default Nav;
