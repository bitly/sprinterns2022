 Bio
import React from 'react';
import RomasComponent from './RomasComponent.jsx';
import LarasComponent from './LarasComponent.jsx';
import AndreasComponent from './AndreasComponent.jsx';
import TajrasComponent from './TajrasComponent.jsx';
import DanasComponent from './DanasComponent.jsx';
import CommentsComponent from './CommentsComponent.jsx';
import APIExample from './APIExample.jsx';
import Meetteam from './Meetteam.jsx';
import APIinfo from './APIinfo.jsx';
import CardsComponent from './CardsComponent.jsx';


const Bio = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
    <div className='changeClassName'>

        { bioToShow === 'Dana' && <DanasComponent /> }
        { bioToShow === 'Tajra' && <TajrasComponent /> } 
        { bioToShow === 'Lara' && <LarasComponent /> } 
        { bioToShow === 'Andrea' && <AndreasComponent /> }
        { bioToShow === 'Roma' && <RomasComponent /> }
        { bioToShow === 'Comments' && <CommentsComponent /> }
        { bioToShow === 'APIExample' && <APIExample /> }
        { bioToShow === 'Meetteam' && <Meetteam /> }
        {bioToShow === 'APIinfo' && <APIinfo /> }
        {bioToShow === 'CardsComponent' && <CardsComponent/> }
       
    </ div>
  );
}


export default Bio;