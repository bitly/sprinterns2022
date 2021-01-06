import React from 'react';

const RomasComponent = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
    <div className='romabio'>
       
        <p>{bioToShow}</p>
        <p>Roma Cooper</p>
        <p className="testtag">About Me</p>
        <p>Hey I'm Roma I like to play a total of three video games and this is the one im playing right now this is just placeholder</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <img className="valorant" alt="test image"src="https://riot.com/2Lm40MF"/>
    </ div>
  );
}

export default RomasComponent;