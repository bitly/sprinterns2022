import React from 'react';

const AndreasComponent = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
    <div className='andreasBio'>
        <p>Hello World</p>
        <p>My name is Andrea K Cajamarca</p>
        <p>I am 21-years-old. I am a Junior in CUNY Hunter College.</p>
    </ div>
  );
}

export default AndreasComponent;