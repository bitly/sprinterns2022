import React from 'react';
import {Link} from "react-router-dom";
const Meetteam = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
     <> 
     <div className="biocards">
    <p className="biotitlepage">This is the team's page!</p>
    {/* CARD ONE */}
    <div className="cardtajra">
    <img className="tajrasimage" src="https://bit.ly/3bVDJQD"></img>
    <div className="container">
    <h4 className="personname">Tajra Sinanagic</h4>
    <div className="introcardsbio">
    <p className="introduction">Software Engineering Intern</p>
    <p className="aboutmecards">Multilingual who loves math, coding, dogs, and stars.</p>
    </div>
     <Link to="/Tajra">
     <button className="findmorebtn" type="button">
          Find out more!
     </button>
     </Link>
  </div>
  </div>
  {/* CARD TWO */}
  <div className="cardandrea">
    <img className="andreasimage" src="https://bit.ly/3sJKaw8"></img>
    <div className="container">
    <h4 className="personname">Andrea Cajamarca</h4>
    <div className="introcardsbio">
    <p className="introduction">Software Engineering Intern</p>
    <p className="aboutmecards">Writer, Coder, and a College student troubleshooting my college career. </p></div>
    <Link to="/Andrea">
     <button className="findmorebtn" type="button">
          Find out more!
     </button>
     </Link>
  </div>
  </div>
  {/* CARD THREE */}
  <div className="cardlara">
    <img className="larasimage" src="https://bit.ly/3qvm8mC"></img>
    <div className="container">
    <h4 className="personname">Lara Choudhury</h4>
    <div className="introcardsbio">
    <p className="introduction">Software Engineering Intern</p>
    </div>
    <Link to="/Lara">
     <button className="findmorebtn" type="button">
          Find out more!
     </button>
     </Link>
  </div>
  </div>
  {/* CARD FOUR */}
  <div className="carddana">
    <img className="danasimage" src="https://bit.ly/36131ZE"></img>
    <div className="container">
    <h4 className="personname">Dana Fishman</h4>
    <div className="introcardsbio">
    <p className="introduction">Software Engineering Intern</p>
    <p className="aboutmecards">Professional, all-knowing wintern in theory; forever-learning, sometimes-somewhat-confused wintern in practice. Oh, and a fan of Chauncey (especially his company swag socks)</p></div>
    <Link to="/Dana">
     <button className="findmorebtn" type="button">
          Find out more!
     </button>
     </Link>
  </div>
  </div>
  {/* CARD FIVE */}
  <div className="cardroma">
    <img className="romasimage" src="https://bit.ly/2Y05pLO"></img>
    <div className="container">
    <h4 className="personname">Roma Cooper</h4>
    <div className="introcardsbio">
    <p className="introduction">Software Engineering Intern</p>
    <p className="aboutmecards">Hey there! My name is Roma! My pronouns are she/they. I'm a sophomore at Brooklyn College majoring in Computer Science.</p>
    </div>
    <Link to="/Roma">
     <button className="findmorebtn" type="button">
         Find out more!
     </button>
     </Link>
  </div>
  </div>
  </div>
    </>
  );
}




export default Meetteam;