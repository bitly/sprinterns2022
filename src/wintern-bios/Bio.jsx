 Bio
import React from 'react';
import RomasComponent from './RomasComponent.jsx';
import LarasComponent from './LarasComponent.jsx';
import AndreasComponent from './AndreasComponent.jsx';
import TajrasComponent from './TajrasComponent.jsx';
import DanasComponent from './DanasComponent.jsx';
import CommentsComponent from './CommentsComponent.jsx';
import Meetteam from './Meetteam.jsx';
import APIinfo from './APIinfo.jsx';


const Bio = () => {
  const { useState } = React;
  const [person, setPerson] = useState('');

  return (
    <div className='changeClassName'>
      {person == 'Tajra' && <TajrasComponent/>}
      {person == 'Dana' && <DanasComponent/>}
      {person == 'Lara' && <LarasComponent/>}
      {person == 'Andrea' && <AndreasComponent/>}
      {person == 'Roma' && <RomasComponent/>}
      <Meetteam onToggle={(newPerson)=>{setPerson(newPerson)}} /> 
       
    </ div>
  );
}


export default Bio;