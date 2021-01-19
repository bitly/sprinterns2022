import React from 'react';
import img from '../assets/bio-photos/bio-pic_Andrea.jpg';
//import APIExample from '../APIExample';
import APIExample from '/workspace/winterns2021/src/APIExample.jsx';

const AndreasComponent = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
    <div className = "andreaBGI">
        <APIExample/>
            <h1>Bio: Andrea K Cajamarca</h1>
            <img className = "andreaImg" src={img} />

            <div className = "paragraphs">
            <p>About Me: I am 21-years-old. I am a Junior in CUNY Hunter College. My major is English, concentrated on Creative Writing; minor in Computer Science. Fun Fact: I have plenty! I am the third oldest of 7 kids. I have a 5-year-old cat named Khloe! I know two other languages (Spanish, and Japanese).</p>

            <p>Things I Like: I like to write! I am currently writing an epic that I've planned out for many years. It is currently being revised, and will continue to be revised until I have written every idea out (it may take a while). I also like to play softcore and relaxing games such as Animal Crossing, Harvest Moon, and Minecraft!</p>
            
            <p>When I Grow Up: It's a real toss-up! I am still adamant about completeing my story in the near future, however I find myself looking at other directions about my future career goals. I want to be a writer but I also want to start streaming and have discussions about my story or aspects of what a story can be. Then there is also the idea to be a web developer or to help facilitate programs for web developement in classrooms like Code Nation! There are so many directions that I want to take, honestly!</p>
            </div>
</div>
  );
}

export default AndreasComponent;