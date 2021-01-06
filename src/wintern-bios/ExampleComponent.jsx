import React from 'react';
import RomasComponent from './RomasComponent.jsx';
import LarasComponent from './LarasComponent.jsx';
import AndreasComponent from './AndreasComponent.jsx';
import TajrasComponent from './TajrasComponent.jsx';
import DanasComponent from './DanasComponent.jsx';

const ExampleComponent = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
    <div className='changeClassName'>
        <p className={color}>Random Number: {randomNum}</p>
        <p>{bioToShow}</p>

        { bioToShow === 'Dana' && <DanasComponent /> }
        { bioToShow === 'Tajra' && <TajrasComponent /> } 
        { bioToShow === 'Lara' && <LarasComponent /> } 
        { bioToShow === 'Andrea' && <AndreasComponent /> }
        { bioToShow === 'Roma' && <RomasComponent /> }
    </ div>
  );
}

export default ExampleComponent;