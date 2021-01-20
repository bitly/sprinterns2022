import React from 'react';
import img from '../assets/bio-photos/tajra.jpg';
import img2 from '../assets/bio-photos/bio-pic_Andrea.jpg';
import img3 from '../assets/bio-photos/Lara_Image.jpg';

const Meetteam = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
     <> 
     <div className="biocards">
    <p>This is the team's page!</p>
    {/* CARD ONE */}
    <div className="cardtajra">
    <img className="tajrasimage" src={img}></img>
    <div className="container">
    <h4><b>Tajra Sinanagic</b></h4>
    <p className="introduction">Software Engineering Intern</p>
    <form action="https://5000-f90c103f-207a-4a06-b5f7-18ea2ff191af.ws-us03.gitpod.io/#/Tajra" method="get" target="_blank">
         <button type="submit">Click me</button>
      </form>
  </div>
  </div>
  {/* CARD TWO */}
  <div className="cardandrea">
    <img className="andreasimage" src={img2}></img>
    <div className="container">
    <h4><b>Andrea Cajamarca</b></h4>
    <p className="introduction">Software Engineering Intern</p>
    <form action="https://5000-f90c103f-207a-4a06-b5f7-18ea2ff191af.ws-us03.gitpod.io/#/Andrea" method="get" target="_blank">
         <button type="submit">Click me</button>
      </form>
  </div>
  </div>
  {/* CARD THREE */}
  <div className="cardlara">
    <img className="larasimage" src={img3}></img>
    <div className="container">
    <h4><b>Lara Choudhury</b></h4>
    <p className="introduction">Software Engineering Intern</p>
    <form action="https://5000-f90c103f-207a-4a06-b5f7-18ea2ff191af.ws-us03.gitpod.io/#/Lara" method="get" target="_blank">
         <button type="submit">Click me</button>
      </form>
  </div>
  </div>
  {/* CARD FOUR */}
  <div className="carddana">
    <img className="danasimage" src="https://bit.ly/3onMGFx"></img>
    <div className="container">
    <h4><b>Dana Fishman</b></h4>
    <p className="introduction">Software Engineering Intern</p>
    <form action="https://5000-f90c103f-207a-4a06-b5f7-18ea2ff191af.ws-us03.gitpod.io/#/Dana" method="get" target="_blank">
         <button type="submit">Click me</button>
      </form>
  </div>
  </div>
  {/* CARD FIVE */}
  <div className="cardroma">
    <img className="romasimage" src="https://i.imgur.com/Eb9wkez.png"></img>
    <div className="container">
    <h4><b>Roma Cooper</b></h4>
    <p className="introduction">Software Engineering Intern</p>
    <form action="https://5000-f90c103f-207a-4a06-b5f7-18ea2ff191af.ws-us03.gitpod.io/#/Roma" method="get" target="_blank">
         <button type="submit">Click me</button>
      </form>
  </div>
  </div>
  </div>
    </>
  );
}




export default Meetteam;