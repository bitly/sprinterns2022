import React from 'react';
import img from '../assets/bio-photos/Lara_Image.jpg';

const LarasComponent = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
       <div className='larabio'>
           <h1 className='title'> Lara Choudhury </h1>
                <img className='laraimage' src={img}/>
            <div>
                <p className='first'> HI! Welcome to my Bio! </p>
                <p> I am Lara Choudhury. I am 19 years old. I am an upper sophmore at John Jay College of Criminal Justice. 
                    Majoring in Computer Science and Information Security.</p>
                <p> As well as studying computer science, I work in a family Real Estate Business with my parents.</p>
                <p> I intend on getting my salespersons license within the next month. I love both computer science and real estate because 
                    I get to accomplish and learn so much from both careers.</p>
                <p> I come from a diverse background where my mom is Puerto Rican and my dad is Indian. 
                    I speak fluent spanish because I grew up in Lares, Puerto Rico with my grandparents.</p>
                <p> I have two sisters one is five years old and the other is thirteen. I love them both a lot.</p>
                <p> My favorite things to do in my free time are just to spend time with my family. I love shopping and driving
                    everywhere. </p>
                <p> As I get older, my dreams are to either follow a career in engineering, most likely as a front end enginner because I love
                    seeing when my work comes together and I would love to become a real estate Broker and take over my families business. </p>
            </div>
       </div>
  );
}
export default LarasComponent;