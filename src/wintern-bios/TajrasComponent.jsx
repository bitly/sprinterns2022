import React from 'react';
import img from '../assets/bio-photos/tajra.jpg';

const TajrasComponent = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
    <div className='tajrabio'>
    <img className='mojaslika' src={img}/>
    <div>
    <p class='prvitext'> Hi, everyone! My name is Tajra Sinanagic and I am 19 years old. I am a freshman at Kingsborough Community College, who is currently a major in Liberal Arts, but from Spring 2021 I will be majoring in Computer Science. </p>
     <p className='ostatak'>How I would describe myself is that I am someone who is always passionate about learning. One good advice my high school English teacher told me is,"Knowledge is the key that opens all doors!". I always liked this advice or some would call it saying because I find it to be true. There is never an end to our knowledge, so it means we can always upgrade ourselves as a software does too :D. Human softwares, maybe? </p>
    </div>
       <div className="funfacts">
        <ul>
        <h4 class="titleone"> FUN FACTS </h4>
        <li> I speak 5 languages fluently, which are: Bosnian, Serbian, Croatian (they are pretty similar, but have some small differences in accents), German, and English.</li>
        <li> I have 3 dogs. An English Springer Spaniel, 13 years old, named Dzina. A Chichon (Chihuahua mixed with Bishon), 2 years old, named Bella. A Yorkie, 4 years old, named Beko. </li>
        <li> My favorite meal are tacos because the country I come from, there are no tacos. Can you imagine:( ? </li>
        </ul>
        </div>
    </ div>
  );
        }

export default TajrasComponent;