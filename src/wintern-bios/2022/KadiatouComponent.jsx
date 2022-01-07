import React from 'react';
import img from '../../assets/bio-photos/bio_kad.jpg';

const KadiatouComponent = () => {
    return (
      <div className='Kadbio'>
          <img className="bio_pic" alt="test image"src={img}/>   
          <h1>Kadiatou Diallo</h1>
          
          <p className="testtag1">Who am I?~</p>
          <p>I am Kadiatou Diallo.</p>
          <p>A freshmen at Hunter college.</p>
          <p>Expected major: Computer Science.</p>
          
          <p className="testtag2">What I like?</p>
          <p>I love Documentaries. Crime and Corruption related documentaries are my favorite.</p>
          <p>I love food. I am hungry all day every day.</p>
          <p></p>
           
          <p className="testtag3">Facts about me.</p>
          <p>I am from guinea.(Located in West Africa)</p>
          <p>I speak 3 languages:French, Fulani, and English.</p>
          <p>I am also very interested in cybersecurity</p>
          
      </ div>
    );
  }
  
  export default KadiatouComponent;