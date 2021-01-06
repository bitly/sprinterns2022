import React from 'react';
<<<<<<< HEAD
import RomasComponent from './RomasComponent.jsx';
=======
import LarasComponent from './LarasComponent.jsx';
import AndreasComponent from './AndreasComponent.jsx';
import TajrasComponent from './TajrasComponent.jsx';
>>>>>>> af4e9cd5072e1759a3131528d758e5899d5c7f8b

const ExampleComponent = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
    <div className='changeClassName'>
        <p className={color}>Random Number: {randomNum}</p>
        <p>{bioToShow}</p>

<<<<<<< HEAD
        {/*{ bioToShow === 'Dana' && <DanasComponent /> } */}
        {/*{ bioToShow === 'Tajra' && <TajrasComponent /> } */}
        {/*{ bioToShow === 'Lara' && <LarasComponent /> } */}
        {/*{ bioToShow === 'Andrea' && <AndreasComponent /> } */}
        { bioToShow === 'Roma' && <RomasComponent /> } 
=======
        {/* { bioToShow === 'Dana' && <DanasComponent /> } */}
        { bioToShow === 'Tajra' && <TajrasComponent /> } 
        { bioToShow === 'Lara' && <LarasComponent /> } 
        { bioToShow === 'Andrea' && <AndreasComponent /> }
        {/* { bioToShow === 'Roma' && <RomasComponent /> } */}
>>>>>>> af4e9cd5072e1759a3131528d758e5899d5c7f8b
    </ div>
  );
}


export default ExampleComponent;