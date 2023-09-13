import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
return (
<nav>
    <div>
    <i> </i>
    <Link to="/">
        <h1 id="logo-colour">TravelTek.</h1>
    </Link>
    </div>
    <div className="links-container">
    <ul>
        <li>
        <Link className="nav-links" id="home" to="/">
            Home
        </Link>
        </li>
        </ul>
    </div>
</nav>
);
};

export default NavBar;