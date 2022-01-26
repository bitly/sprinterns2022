import React from 'react';
import img from '../../assets/bio-photos/PROFILE.JPEG';
import bella from '../../assets/miscellaneous/bella.jpg';
import broady from '../../assets/miscellaneous/broady.jpg';
import jason from '../../assets/miscellaneous/jason.png';
import sharon from '../../assets/miscellaneous/sharon.png';
import stevie from '../../assets/miscellaneous/stevie.png';
import winnie from '../../assets/miscellaneous/winnie.png';
import olddoggies from '../../assets/miscellaneous/olddoggies.png';
import infinity from '../../assets/miscellaneous/infinity.png';
import quinn from '../../assets/miscellaneous/quinn.png';

const MargaretComponent = () => {
 return (
    <div className='backgroundMe'>  
      <p className='borderName'>  MARGARET DIAZ </p>
      <img className='profilePic' src={img}/>
      <p className='profileName'>(⊙⊙) Hover over the images for a surprise (⊙⊙)</p>
      <p className= 'aboutME'>I am a sophomore at Hunter College majoring in Computer Science. I recently moved to the city after transferring from Bryn Mawr College in PA. My first expereince with coding was the creative code sketchbook Processing. I love the trial and error process of coding and debugging, it's like solving a jigsaw puzzle! My dream job is to become a software engineer and I am thankful to every opportunity that brings me closer to this path. I am incredibly grateful to my family. 
        My parents had to sacrafice so much to provide for me and my siblings and as a first generation college student a life goal of mine is to graduate, complete my masters, and buy my family a big house! I also would like to retire on a farm, foster pets and have a pet pig (they love to cuddle!)</p>
      <img className='bellaImg' src={bella}/>
      <p className='bellaName'> 💜 Bella 🧡</p>
      <img className='broadyImg' src={broady}/>
      <p className='broadyName'> 💚 Broady 🤎 </p>
      <img className='jasonImg' src={jason}/>
      <p className='jasonName'> 💛 Jason 🤍 </p>
      <img className='winnieImg' src={winnie}/>
      <p className='winnieName'> 💙 Winnie 💜 </p>
      <img className='sharonImg' src={sharon}/>
      <p className='sharonName'> 🧡 Sharon 💚 </p>
      <img className='stevieImg' src={stevie}/>
      <p className='stevieName'> 🤎 Stevie 💛 </p>
      <img className='olddoggiesImg' src={olddoggies}/>
      <p className='olddoggiesName'> 🤍 Steve + Sharon 💜</p>
      <a className='favoriteMusic'>♬ Favorite Songs ♬</a>
      <a className='clicktoplay'>♬Click to listen♬</a>
      <a href="https://www.youtube.com/watch?v=2d1wKn-oJnA" className='taylorButton' target="_blank">Taylor Swift</a>
      <a href="https://www.youtube.com/watch?v=sVdxA0rFN5c" className='estemanButton'target="_blank">Esteman</a>
      <a href="https://www.youtube.com/watch?v=jix-u8h4KEU" className='hayleyButton'target="_blank">Hayley Kiyoko</a>
      <a href="https://www.youtube.com/watch?v=QIQvUmiyVTY" className='ruzziButton'target="_blank">Ruzzi</a>
      <a href="https://www.youtube.com/watch?v=RvnkAtWcKYg" className='paramoreButton'target="_blank">Paramore</a>
      <a href="https://www.youtube.com/watch?v=XBCDvINm0Vo"className='selenaButton'target="_blank">Selena</a>
      <a href="https://www.youtube.com/watch?v=56WBK4ZK_cw"className='khalidButton'target="_blank">Khalid</a>
      <a href="https://www.youtube.com/watch?v=owLnDbAIOWE"className='mirandaButton'target="_blank">Miranda Del Sol</a>
      <a href="https://www.youtube.com/watch?v=kOHB85vDuow"className='twiceButton' target="_blank">Twice</a>
      <a href="https://www.youtube.com/watch?v=TmKh7lAwnBI"className='badBunny'target="_blank">Bad Bunny</a>
      <a href="https://www.youtube.com/watch?v=clwLKJ294u4"className='britneyButton'>Britney Spears</a>
      <a className='favoriteFacts'> Extra </a>
          <h1 className='center'>FAVORITES:</h1>
          <a className='myFavs'>
            FAVORITES
          <li>Jigsaw puzzles</li>
          <li>Digital Art (it's not good but its fun!)</li>
          <li>Writing (it's also not good but its fun!)</li>
          <li>True Crime Podcasts</li>
          <li>Reality TV Shows/Movies that make you loose brain cells (the best kind)</li>
          <li>Marvel</li>
          <li>DC</li>
          <li>AOT</li>
          <li>What We do in the Shadows</li>
          <li>GOT and ASOIF (but let's just forget the last season)</li>
          <li>MHA</li>
          <li>Star Wars</li>
          {/* <li>Much More... it never ends</li> */}
      </a>
      <img className='tooMuch' src={infinity}/>
      <h1 className='centerFacts'>Facts</h1>
      <a className ='Facts'>
      <ul>
        <li>I have eight siblings (but sadly never got a TLC show for it)</li>
        <li>I have completed over 50 puzzles during quarantine</li>
       </ul>
      </a>
      <img className='quinnImg' src={quinn}/>
      <p className='quinnName'> The newest member of the Family: Quinn 💗 </p>
      </div>
 );
}


export default MargaretComponent;