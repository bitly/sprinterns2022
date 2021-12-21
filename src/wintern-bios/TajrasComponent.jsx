import React from 'react';
import img from '../assets/bio-photos/tajra.jpg';

const TajrasComponent = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);
  const randomNum = Math.random();


  return (
    <div className='tajrabio'>
    <img className='mojaslika' src={img}/>
    <h2 className='bigtitleme'>Tajra Sinanagic</h2>
    <p className='prvitext'> Hi, everyone! I am your new wintern in Software Engineering for 2021! I am a freshman at Kingsborough Community College, who is currently a major in Liberal Arts, but from Spring 2021 I will be majoring in Computer Science. </p>
     <p className='ostatak'>How I would describe myself is that I am someone who is always passionate about learning. One good advice my high school English teacher told me is,"Knowledge is the key that opens all doors!". I always liked this advice or some would call it saying because I find it to be true. There is never an end to our knowledge, so it means we can always upgrade ourselves as a software does too :D. Human softwares, maybe? </p>
    <span className='mismali' title="Chuck Norris writes code...that optimizes itself.">Move your mouse over me for a funny fact!</span>
     <p className="blue-rectangle">Something that many amazes is that I have moved to Brooklyn, NY a year ago from Bosnia-Herzegovina. I was born and raised in the capital Sarajevo, where I most enjoy the open cafes with sitting areas. All age people, would find time in a day to have a sit, coffee, and a little chit chat with their friend. Even when you are alone, the community knows each other well, so you always have some familiar face to talk with.</p>
      <p className="red-rectangle">What I like to do in my free time is write stories and draw cartoon characters. I find it very relaxing and a great way to rest from computer or phone screen.</p>
      <p className="gray-rectangle">A career I'd like to have in the nearby future is to be a Software Engineer or Web Developer because it is something I enjoy doing and also I see myself waking up every morning for the next 30-40years to work in such field. </p>
      <p className="black-rectangle">A favorite song of mine is, Feels Like Summer by Childish Gambino. But I do listen to all genres of music and like to explore them too. </p>
      <p className="yellow-rectangle">Since I moved to Brooklyn, there wasn't much time to explore, considering COVID-19. However, I like the diversity because for a multilingual like me, I have the opportunity to find people who speak natively the language I want to learn. I can learn a lot about their culture through language without even visiting the country. Of course, if there was an opportunity to visit, who wouldn't? Mostly, everyone likes to travel 😁 </p>
       <div className="funfacts">
        <ul>
        <h4 className="titleone"> FUN FACTS </h4>
        <li> I speak 5 languages fluently, which are: Bosnian, Serbian, Croatian (they are pretty similar, but have some small differences in accents), German, and English.</li>
        <li> I have 3 dogs. An English Springer Spaniel, 13 years old, named Dzina. A Chichon (Chihuahua mixed with Bishon), 2 years old, named Bella. A Yorkie, 4 years old, named Beko. </li>
        <li> My favorite meal are tacos because the country I come from, there are no tacos. Can you imagine 😔 ? </li>
        <li> My favorite colors are blue and green, as you might have noticed, and the Northern Lights are definitely something I want to see because I am into stargazing and find fascination in astronomy. </li>
        </ul>
        </div>
    
        </div>

  );
        }

export default TajrasComponent;