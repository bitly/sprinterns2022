import React from 'react';
import img from '../../assets/bio-photos/f9b35fb65bd7519d0510ddf880720585.jpg';
import {Link} from "react-router-dom";


const KadiatouComponent = () => {
    return (
      <div className='kadbio'>

          <img className="bio_pic" alt="test image"src={img}/>  

           <div className="sign">
            <span className="fast-flicker">Kadia</span>tou<span  className="flicker">Dial</span>lo
          </div> 

        <div>

          <div  className="box box1">
             <div  className="oddboxinner">Who am I?</div>
                 <p>I am Kadiatou Diallo.
                 A freshmen at Hunter college.  
                 Expected major: Computer Science.</p>
          </div>

          <div  className="box box2">
             <div  className="evenboxinner"> What I like?</div>
             <p>I love Documentaries. 
             Crime and Corruption related documentaries are my favorite.
             I love Documentaries. Crime and Corruption related documentaries are my favorite.
             I love food. I am hungry all day every day.</p>
          </div>

          <div  className="box box3">
             <div  className="oddboxinner3">Facts about me.</div>
             <p> I am from guinea.(Located in West Africa)
             I speak 3 languages:French, Fulani, and English.
             I am also very interested in cybersecurity</p>
          </div>

          </div>

          <Link to ="/home"><button className="button">Team</button></Link>

      </ div>
    );
  }


export default KadiatouComponent;

