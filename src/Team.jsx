import React from 'react';
import Bio from './wintern-bios/Bio.jsx';
import {Link} from "react-router-dom";
import './styles/main.scss';

function Team() {
    return (
        <>
        <div className="header">
            <div className="navbar">
  <div className="dropdown">
    <button className="dropbtn">Home
    </button>
    <div className="dropdown-contenttwo">
      <Link to="/Meetteam">Meet The Team</Link>
      <Link to="/Comments">Help Center</Link>
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
        <div className="main">
    
        <div className="sidebar"></div>
        <div className="center">
            <Bio/>
          <div className="footer">
            <div className="footertext">
              <p className="center-links">
                <a className="ft link-1" href="#"> Home </a>
                <a className="ft link-2" href="#"> About </a>
                <a className="ft link-3" href="#"> Help </a>
                <a className="ft link-4" href="#"> Legal </a>
                <a className="ft link-5" href="#"> Contact </a>
              </p>
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-twitter"></a>
              <a href="#" className="fa fa-github"></a>
              <a href="#" className="fa fa-instagram"></a>
              <a href="#" className="fa fa-linkedin"></a>
            </div>
            <p className="under-text"> Bitly Winterns &copy; 2021</p>
          </div>
          </div>
          <Link to="/Home"><img className= "logo" alt="bitly logo"src="https://docrdsfx76ssb.cloudfront.net/static/1610484866/pages/wp-content/uploads/2019/02/bitly.png"/></Link>
        </div>
    </>
  );
        
 }

export default Team;
