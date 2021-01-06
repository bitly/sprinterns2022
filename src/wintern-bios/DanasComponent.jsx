import React from 'react';

<<<<<<< HEAD
const ExampleComponent = ({bioToShow, color='red'}) => {
=======
const DanasComponent = ({bioToShow, color='red'}) => {
>>>>>>> dd1792fddae729194f1ba2dd4742a6208ba45fbb
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
<<<<<<< HEAD
    <div className='changeClassName'>
        <p className={color}>Random Number: {randomNum}</p>
        <p>{bioToShow}</p>

        {/* { bioToShow === 'Dana' && <DanasComponent /> } */}
        {/* { bioToShow === 'Tajra' && <TajrasComponent /> } */}
        {/* { bioToShow === 'Lara' && <LarasComponent /> } */}
        {/* { bioToShow === 'Andrea' && <AndreasComponent /> } */}
        {/* { bioToShow === 'Roma' && <RomasComponent /> } */}
=======
    <div className='danasBio'>
    <p>Hello there!</p> 
>>>>>>> dd1792fddae729194f1ba2dd4742a6208ba45fbb
    </ div>
  );
}

<<<<<<< HEAD
export default ExampleComponent;
=======
export default DanasComponent;
>>>>>>> dd1792fddae729194f1ba2dd4742a6208ba45fbb
