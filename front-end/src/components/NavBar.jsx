import React from "react";
import logo from "../static/img/Logo.png";

function Navbar(){
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
            <div class="dropdown">
                <button class="btn-logout dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    User
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><a class="dropdown-item" href="/">Logout</a></li>
                </ul>
            </div>
        </div>
    );

}

export default Navbar;