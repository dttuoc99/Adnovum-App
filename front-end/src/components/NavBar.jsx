import React from "react";
import logo from "../static/img/Logo.png";
import { Nav } from 'react-bootstrap'
function Navbar() {
    return (
        <div className="header-bar">
            <div className="logo-nav">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <a href="#" className="logoname">
                    Adnovum User Service
                </a>
            </div>
            <div className="logout-button">
                <a href="https://operation-diet-coke-delta-squad/testauth/?logout" >
                    <button type="button" class="btn btn-outline-light" >
                        LogOut
                    </button>
                </a>

            </div>
        </div>
    );

}

export default Navbar;