import React from 'react';
import {Link} from "react-router-dom";
import dana from '../assets/meet-the-team-icons/DanaBioImage.jpg';
import roma from '../assets/meet-the-team-icons/RomaBioImage.jpg';
import lara from '../assets/meet-the-team-icons/LaraBioImage.jpg';
import tajra from '../assets/meet-the-team-icons/TajraBioPic.jpg';
import andrea from '../assets/meet-the-team-icons/AndreaBioPic.jpg';
const Meetteam = ({onToggle}) => {
  const { useState } = React;

  return (
     <> 
     <div className="biocards">
    <h1 className="bigtitleay">Meet The Team</h1>
    <p className="biotitlepage">Hello! This is the team that is responsible for creating this awesome page for your use! Meet us by clicking on "Find out more".</p>
    <div className="bckgclrforcard">
    <div className="cardtajra">
    <img className="tajrasimage" src={tajra}></img>
    <div className="container">
    <h4 className="personname">Tajra Sinanagic</h4>
    <div className="introcardsbiot">
    <p className="introduction">Software Engineering Intern</p>
    <p className="aboutmecards">Multilingual who loves math, coding, dogs, and stars.</p>
    </div>
     <button onClick={()=>{onToggle('Tajra')}} className="findmorebtn" type="button">
          Find out more!
     </button>
  </div>
  </div>
  {/* CARD TWO */}
  <div className="cardandrea">
    <img className="andreasimage" src={andrea}></img>
    <div className="container">
    <h4 className="personname">Andrea Cajamarca</h4>
    <div className="introcardsbioa">
    <p className="introduction">Software Engineering Intern</p>
    <p className="aboutmecards">Writer, Coder, and a College student troubleshooting my college career. </p></div>
     <button onClick={()=>{onToggle('Andrea')}} className="findmorebtn" type="button">
          Find out more!
     </button>
  </div>
  </div>
  {/* CARD THREE */}
  <div className="cardlara">
    <img className="larasimage" src={lara}></img>
    <div className="container">
    <h4 className="personname">Lara Choudhury</h4>
    <div className="introcardsbiol">
    <p className="introduction">Software Engineering Intern</p>
    <p className="aboutmecards">Multicultural student with a passion for coding, cyber security, and web design.</p>
    </div>
     <button onClick={()=>{onToggle('Lara')}} className="findmorebtn" type="button">
          Find out more!
     </button>
  </div>
  </div>
  {/* CARD FOUR */}
  <div className="carddana">
    <img className="danasimage" src={dana}></img>
    <div className="container">
    <h4 className="personname">Dana Fishman</h4>
    <div className="introcardsbiod">
    <p className="introductiond">Software Engineering Intern</p>
    <p className="aboutmecards">Professional, all-knowing wintern in theory; forever-learning, sometimes-somewhat-confused wintern in practice. Oh, and a fan of Chauncey (especially his company swag socks)</p></div>
     <button onClick={()=>{onToggle('Dana')}} className="findmorebtn" type="button">
          Find out more!
     </button>
  </div>
  </div>
  {/* CARD FIVE */}
  <div className="cardroma">
    <img className="romasimage" src={roma}></img>
    <div className="container">
    <h4 className="personname">Roma Cooper</h4>
    <div className="introcardsbior">
    <p className="introduction">Software Engineering Intern</p>
    <p className="aboutmecards">Hey there! My name is Roma! My pronouns are she/they. I'm a sophomore at Brooklyn College majoring in Computer Science.</p>
    </div>
     <button onClick={()=>{onToggle('Roma')}}className="findmorebtn" type="button">
         Find out more!
     </button>
  </div>
  </div>
  </div>
  </div>
    </>
  );
}




export default Meetteam;