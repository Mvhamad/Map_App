import React from "react";
import "./navbar.css";
import logo from "./logo.png"

const Navbar = () => {
    return (
        <>
            <div className="Navbar">
                <div className="logo">
                    <img src={logo} alt="Mylogo" />
                </div>
                <div className="elem">
                    <ul>
                        <li>HOME</li>
                        <li>About Us</li>
                        <li className="contact">Contact</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;