import React from 'react';

const LarasComponent = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
    <div className='larasbio'>
       <p> Hellooooooo</p>
    </ div>
  );
}

export default LarasComponent;