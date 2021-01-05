import React from 'react';

const DanasComponent = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
    <div className='danasBio'>
    <p>Hello there!</p> 
    </ div>
  );
}

export default DanasComponent;