import React from 'react';

const TajrasComponent = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
    <div className='tajrabio'>
    <p>Hi

    </p>
    </ div>
  );
}

export default TajrasComponent;