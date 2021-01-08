import React from 'react';

const RomasComponent = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
    <div className='romabio'>
       
        <p>{bioToShow}</p>
        <img className="selfportrait" alt="test image"src="https://i.imgur.com/Eb9wkez.png"/>
        <h1>Roma Cooper</h1>
        <hr/>
        <p className="testtag">About Me</p>
        <p>Hey there! My name is Roma! </p>
        
        <p>My pronouns are she/they.</p>
        <p>I'm a sophomore at Brooklyn College majoring in Computer Science.</p>
        <hr/>
        <p className="testtag">Things That I Like</p>
        <p>Games! I love playing Valorant, Overwatch, and Minecraft. Even though I only play a total of three games, I never get exhausted of them, so it's not a problem. </p>
        <p>I also love drawing and have recently been working a lot on my digital art!</p>
        <p>I also love all my friends!!!</p>
        
        <hr/>
        <p className="testtag">What I Want To Be When I Grow Up</p>
        <p>I'm still not sure! Is that an okay thing to admit at age 19? That I still haven't completely mapped out exactly what it is</p>
        <p>that I want to accomplish in life by this tender age? All I know is that I'm really curious about Computer Science things and Graphic Design! </p>
    
        <hr/>

        
    </ div>
  );
}

export default RomasComponent;