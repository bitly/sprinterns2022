import React from 'react';
<<<<<<< HEAD
import DanasComponent from './DanasComponent.jsx';
=======
import AndreasComponent from './AndreasComponent.jsx';
import TajrasComponent from './TajrasComponent.jsx';
>>>>>>> 6a9ec0c3aa6d125498d949479ba19bab8bb3e81c

const ExampleComponent = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
    <div className='changeClassName'>
        <p className={color}>Random Number: {randomNum}</p>
        <p>{bioToShow}</p>

        { bioToShow === 'Dana' && <DanasComponent /> }
        {/* { bioToShow === 'Tajra' && <TajrasComponent /> } */}
        {/* { bioToShow === 'Lara' && <LarasComponent /> } */}
        { bioToShow === 'Andrea' && <AndreasComponent /> }
        {/* { bioToShow === 'Roma' && <RomasComponent /> } */}
    </ div>
  );
}

export default ExampleComponent;