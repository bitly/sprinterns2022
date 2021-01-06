import React from 'react';

const RomasComponent = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
    <div className='changeClassName'>
       
        <p>{bioToShow}</p>
        <p>bingo</p>
    </ div>
  );
}

export default RomasComponent;