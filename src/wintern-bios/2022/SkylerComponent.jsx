import React from 'react';
import skylerheadshot from '../../assets/bio-photos/Skyler-Basco-Headshot-Circle.png';

const SkylerComponent = () => {
    return (
        
    <div className = 'main-container'>
        <h1 className='title'> Hey, I'm Skyler Basco! 👋</h1>
        <img className = "skyler-headshot" src={skylerheadshot} />

        <h1 className='about'> About 🦋 </h1>
        <p className='about-content'> My name is Skyler! I’m a developer and designer with an affinity for creative mediums in tech, including augmented/virtual reality, 3D software, and visual effects.
        At Queens College, I’m currently studying Computer Science. I aspire to transform our reality’s “impossibilities” into immersive VR games and AR experiences that uplift people and inspire them to create. </p>
        <h1 className='code'> Code 👩🏻‍💻</h1>
        <p className='code-content'>Check out some of the projects I've developed below!</p>

        <h1 className='create'> Create 🎨</h1>
        <p className='create-content'>I love playing around with different artistic mediums - ranging from colored pencil realism to digital art. See what's in my sketchbook below! </p>

        <h1 className='play'> Play 👾</h1>
        <p className='play-content'>In my free time, you can find me...</p>

        <h1 className='contact'> Contact 📩</h1>
        <p className='contact-content'>Want to connect, collaborate, or build something innovative together? I’m happy to chat about anything from CS to design to future projects. Feel free to shoot me a DM on LinkedIn or send a message through the form below! ⬇️</p>
        <form action="https://formspree.io/f/mzbopzgv" method="POST"> 
        <div className='contact-formspree'>
        <label classname='formspree-name'> <p>Full Name</p> <br/> <textarea name="email"></textarea></label> 
        <br/>
        <br/>
        <label> Email Address <br/> <textarea name="email"></textarea></label>
        <br/>
        <br/>
        <label> Message <br/> <textarea name="message" placeholder="I'd love to chat about..."></textarea> </label>
        <br/>
        <br/>
        <button type="submit">Send</button>
        </div>
        </form>
    </div>
    );
  }

export default SkylerComponent