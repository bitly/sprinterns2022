import React, { useState } from 'react';
import RomasComponent from './RomasComponent.jsx';
import LarasComponent from './LarasComponent.jsx';
import AndreasComponent from './AndreasComponent.jsx';
import TajrasComponent from './TajrasComponent.jsx';
import DanasComponent from './DanasComponent.jsx';
import TeamList from './TeamList.jsx';

const TeamLandingPage2021 = () => {

  const [person, setPerson] = useState('');

  return (
    <div>
        { person === 'Dana' && <DanasComponent /> }
        { person === 'Tajra' && <TajrasComponent /> } 
        { person === 'Lara' && <LarasComponent /> } 
        { person === 'Andrea' && <AndreasComponent /> }
        { person === 'Roma' && <RomasComponent /> }
        { person === 'Skyler' && <SkylerComponent /> }

        <TeamList onToggle={(newPerson) => setPerson(newPerson)} />
    </ div>
  );
}


export default TeamLandingPage2021;