import React from 'react';
import skylerheadshot from '../../assets/bio-photos/Skyler-Basco-Headshot-Circle.png';
import skylervr from '../../assets/bio-photos/skyler-other-pics/skyler-vr.jpg';
import unicornstackpic from '../../assets/bio-photos/skyler-other-pics/unicorn-stack-pic.png';
import m4mpic from '../../assets/bio-photos/skyler-other-pics/m4m-pic.png';
import learnifypic from '../../assets/bio-photos/skyler-other-pics/learnify-pic.png';
import flixpic from '../../assets/bio-photos/skyler-other-pics/flix-pic.png';
import minecraftpic from '../../assets/bio-photos/skyler-other-pics/minecraft-pic.png';
import captainamericapic from '../../assets/bio-photos/skyler-other-pics/captainamerica-pic.png';
import beatsaberpic from '../../assets/bio-photos/skyler-other-pics/beat-saber-pic.png';
import daydreaming from '../../assets/bio-photos/skyler-other-pics/daydreaming.jpeg';
import reflectionsonscience from '../../assets/bio-photos/skyler-other-pics/reflectionsonscience.jpeg';
import crumpled from '../../assets/bio-photos/skyler-other-pics/crumpledtopieces.jpeg';
import frontdoor from '../../assets/bio-photos/skyler-other-pics/frontdoor.jpeg';
import friendsdrawing from '../../assets/bio-photos/skyler-other-pics/friends-drawing.jpeg';
import minecraftsteve from '../../assets/bio-photos/skyler-other-pics/minecraftsteve.gif';
import animatedcap from '../../assets/bio-photos/skyler-other-pics/animatedcap.gif';
import mcsheep from '../../assets/bio-photos/skyler-other-pics/mcsheep.gif';
import qrcode3dbitly from '../../assets/bio-photos/skyler-other-pics/qrcode3dbitly.jpg';
import mcparrot from '../../assets/bio-photos/skyler-other-pics/mcparrot.gif';

const SkylerComponent = () => {
    return (
        
    <div className = 'main-container'>
    <div className='aboutallcontent'> 
    <h3><span class="waving-hand">🎶</span> Hold up - before you scroll, press play for a surprise... <span class="waving-hand">🎶</span></h3><iframe width="60" height="30" src="https://www.youtube.com/embed/Ld4WasFSvm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="threemagicnumber"></iframe>
    <br />
        <h1 className='title'> Hello world, I'm Skyler Basco! <span class="waving-hand">👋</span></h1>
        <h2 className='about-content' text-align='center'> 
        <var>M<sup> 3</sup></var> = Minecrafter. Marvel(er). Maker.
        <br />
        </h2>
        
        
        </div>
        <div className="project-card-skyler">
        <img className = "qrcodecss" src={skylervr} />
        </div>
       


        <h1 className='about'> About <span class="waving-hand">🦋</span> </h1>
        <p className='about-content'> My name is Skyler! I’m a developer and designer with an affinity for creative mediums in tech, including augmented/virtual reality, 3D software, and visual effects.
        At Queens College, I’m currently studying Computer Science. I aspire to transform our reality’s “impossibilities” into immersive VR games and AR experiences that uplift people and inspire them to create. 
        </p>
        <div className="project-card-skyler">
        <p>👇 Scan the QR Code below with your phone to see Bitly's logo in 3D/AR! Made with Blender and echo3D.</p>
        <img className = "qrcodecss" src={qrcode3dbitly}/>
        </div>
        <br/>
        <a class="button-qrcode3d" href="https://go.echo3d.co/Rerj" target="_blank"><p>See a 3D/AR model of the Bitly logo!</p></a>
        <br />

        <h1 className='code'> Code <span class="waving-hand">👩🏻‍💻</span></h1>
        <p className='code-content'>Check out some of the projects I've developed below!</p>

        <div className='project-cards'>
            <div className="project-card-skyler">
            <img className = "frontdoor-pic" src={unicornstackpic} />
            <h2>Unicorn Stack</h2>
            <p>A fun, easy-to-use platform to strengthen healthy financial habits through Augmented Reality (AR), 3D experiences, and more.      </p>
            <a class="button-skyler" href="https://devpost.com/software/unicorn-stack" target="_blank"><p>Explore on Devpost</p></a>
            </div>

            <div className="project-card-skyler">
            <img className = "frontdoor-pic" src={learnifypic} />
            <h2>Learnify</h2>
            <p>A gamified web app that improves the focus, vocabulary, and mathematical skills of students with learning disabilities. </p>
            <a class="button-skyler" href="https://github.com/skylerbasco/Learnify" target="_blank"><p>Explore on GitHub</p></a>
            </div>
        </div>
<br />
        <div className='project-cards'>
            <div className="project-card-skyler">
            <img className = "frontdoor-pic" src={m4mpic} />
            <h2>Melodies for Math</h2>
            <p>Responsive website for a nonprofit simplifying math concepts for high school students, comprising a database of math songs.</p>
            <a class="button-skyler" href="https://github.com/skylerbasco/Melodies-for-Math-Website" target="_blank"><p>Explore on GitHub</p></a>
            </div>

            <div className="project-card-skyler">
            <img className = "frontdoor-pic" src={flixpic} />
            <h2>Flix</h2>
            <p>iOS app for browsing movies currently playing in theaters. Displays the title, description, poster for each film with a CollectionView layout.</p>
            <a class="button-skyler" href="https://github.com/skylerbasco/Flix" target="_blank"><p>Explore on GitHub</p></a>
            </div>
        </div>

        <br />
        <h1 className='create'> Create <span class="waving-hand">🎨</span></h1>
        <p className='create-content'>I love playing around with different artistic mediums - ranging from colored pencil realism to acrylic paint. See a little bit of my sketchbook below! </p>

        <div className='project-cards'>
            <div className="project-card-skyler">
            <img className = "daydreaming-pic" src={daydreaming} />
            <h2>Daydreaming</h2>
            <p>Acrylic painting </p>
            </div>

            <div className="project-card-skyler">
            <img className = "daydreaming-pic" src={reflectionsonscience} />
            <h2>Reflections on Science</h2>
            <p>Colored Pencil Realism</p>
            </div>

        </div>

        <div className='project-cards'>
            <div className="project-card-skyler">
            <img className = "frontdoor-pic" src={crumpled} />
            <h2>Crumpled to Pieces</h2>
            <p>Colored Pencil Realism </p>
            </div>

            <div className="project-card-skyler">
            <img className = "frontdoor-pic" src={friendsdrawing}/>
            <h2>Friends</h2>
            <p>Copic Marker</p>
            </div>
        </div>

        <h1 className='play'> Play <span class="waving-hand">👾</span></h1>
        <p className='play-content'>In my free time, you can find me...</p>

        <div className='project-cards'>
            <div className="project-card-skyler">
            <img className = "play-pics" src={minecraftpic} />
            <h2>Building on Minecraft</h2>
            </div>

            <div className="project-card-skyler">
            <img className = "play-pics" src={captainamericapic} />
            <h2>Watching Marvel films and shows</h2>
            </div>

            <div className="project-card-skyler">
            <img className = "play-pics" src={beatsaberpic} />
            <h2>Playing Beat Saber VR</h2>
            </div>
        </div>

        <h1 className='contact-skyler'> Contact <span class="waving-hand">📩</span></h1>
        <p className='contact-content-skyler'>Want to connect, collaborate, or build something innovative together? I’m happy to chat about anything from CS to design to future projects. <br /> <br /> Feel free to shoot me a DM on <a href="https://www.linkedin.com/in/skylerbasco/" target="_blank" className='hyperlink'>LinkedIn</a>, email me at <a href="mailto: skylerbasco@gmail.com" target="_blank">skylerbasco@gmail.com</a>, or send a message through the form below! ⬇️</p>
        <div className='project-cards'>
            <div className="project-card-skyler">
        <form action="https://formspree.io/f/mzbopzgv" method="POST"> 
        <div className='contact-formspree'>
        <label classname='formspree-name'> <h2>Full Name</h2>  <textarea name="name"  placeholder="Peter Parker"></textarea></label> 
        
        <br/>
        <label > <h2>Email Address</h2>  <textarea name="email"  placeholder="spidermannowayhome@gmail.com"></textarea></label>
        
        <br/>
        <label> <h2>Message</h2> <textarea classname='formspree-message-box' name="message" placeholder="I'm your friendly neighborhood Spider-Man..."></textarea> </label>
        <br/>
        <br/>
        <button  type="submit" id="submit-btn-formspree"><p className='contact-formspree-button'>Submit</p></button>
        <br/>
        </div>
        </form>
        </div>
        <div className="project-card-skyler">
            <br/>
            <br/>
        <img className = "qrcodecss" src={mcparrot} />
        </div>
        </div>

    </div>

    

    );
  }

export default SkylerComponent