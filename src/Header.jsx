import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return <div className="header">
        <Link to="/Home"><img className= "logo" alt="bitly logo"src="https://docrdsfx76ssb.cloudfront.net/static/1640018035/pages/wp-content/uploads/2021/08/bitly_logo.svg"/></Link>

        <div className="navbar">
        <div className="dropdown">
        <button className="dropbtn">Home
        </button>
        <div className="dropdown-contenttwo">
            <Link to="/team">Meet The Team</Link>
            <Link to="/HelpCenter">Help Center</Link>
        </div>
        </div>
    <div className="dropdownone">
        <button className="dropbtnone">API
        </button>
        <div className="dropdown-contentone">
            <Link to="/APIinfo">What is API?</Link>
            <a href="#">API Explorer</a>
        </div>
        </div>
    </div>
    </div>

}

export default Header;