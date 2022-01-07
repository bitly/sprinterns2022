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

        <div className='project-cards'>
            <div className="project-card-skyler">
            <h2>Unicorn Stack</h2>
            <p>A fun, easy-to-use platform to strengthen healthy financial habits through Augmented Reality (AR), 3D experiences, and more.      </p>
            <a class="button" href="https://devpost.com/software/unicorn-stack" target="_blank"><p>Explore on Devpost</p></a>
            </div>

            <div className="project-card-skyler">
            <h2>Learnify</h2>
            <p>A gamified web app that improves the focus, vocabulary, and mathematical skills of students with learning disabilities. </p>
            <a class="button" href="https://github.com/skylerbasco/Learnify" target="_blank"><p>Explore on GitHub</p></a>
            </div>
        </div>

        <div className='project-cards'>
            <div className="project-card-skyler">
            <h2>Melodies for Math</h2>
            <p>Responsive website for a nonprofit simplifying math concepts for high school students, comprising a database of math songs.</p>
            <a class="button" href="https://github.com/skylerbasco/Melodies-for-Math-Website" target="_blank"><p>Explore on GitHub</p></a>
            </div>

            <div className="project-card-skyler">
            <h2>Flix</h2>
            <p>iOS app for browsing movies currently playing in theaters. Displays the title, description, and poster for each film with a CollectionView layout.</p>
            <a class="button" href="https://github.com/skylerbasco/Flix" target="_blank"><p>Explore on GitHub</p></a>
            </div>
        </div>


        <h1 className='create'> Create 🎨</h1>
        <p className='create-content'>I love playing around with different artistic mediums - ranging from colored pencil realism to digital art. See what's in my sketchbook below! </p>

        <div className='project-cards'>
            <div className="project-card-skyler">
            <h2>Unicorn Stack</h2>
            <p>A fun, easy-to-use platform to strengthen healthy financial habits through Augmented Reality (AR), 3D experiences, and more.      </p>
            <a class="button" href="https://devpost.com/software/unicorn-stack" target="_blank"><p>Explore on Devpost</p></a>
            </div>

            <div className="project-card-skyler">
            <h2>Learnify</h2>
            <p>A gamified web app that improves the focus, vocabulary, and mathematical skills of students with learning disabilities. </p>
            <a class="button" href="https://github.com/skylerbasco/Learnify" target="_blank"><p>Explore on GitHub</p></a>
            </div>

            <div className="project-card-skyler">
            <h2>Learnify</h2>
            <p>A gamified web app that improves the focus, vocabulary, and mathematical skills of students with learning disabilities. </p>
            <a class="button" href="https://github.com/skylerbasco/Learnify" target="_blank"><p>Explore on GitHub</p></a>
            </div>
        </div>

        <div className='project-cards'>
            <div className="project-card-skyler">
            <h2>Melodies for Math</h2>
            <p>Responsive website for a nonprofit simplifying math concepts for high school students, comprising a database of math songs.</p>
            <a class="button" href="https://github.com/skylerbasco/Melodies-for-Math-Website" target="_blank"><p>Explore on GitHub</p></a>
            </div>

            <div className="project-card-skyler">
            <h2>Flix</h2>
            <p>iOS app for browsing movies currently playing in theaters. Displays the title, description, and poster for each film with a CollectionView layout.</p>
            <a class="button" href="https://github.com/skylerbasco/Flix" target="_blank"><p>Explore on GitHub</p></a>
            </div>
        </div>

        <h1 className='play'> Play 👾</h1>
        <p className='play-content'>In my free time, you can find me...</p>
        
        <div className='project-cards'>
            <div className="project-card-skyler">
            <h2>Unicorn Stack</h2>
            <p>A fun, easy-to-use platform to strengthen healthy financial habits through Augmented Reality (AR), 3D experiences, and more.      </p>
            <a class="button" href="https://devpost.com/software/unicorn-stack" target="_blank"><p>Explore on Devpost</p></a>
            </div>

            <div className="project-card-skyler">
            <h2>Learnify</h2>
            <p>A gamified web app that improves the focus, vocabulary, and mathematical skills of students with learning disabilities. </p>
            <a class="button" href="https://github.com/skylerbasco/Learnify" target="_blank"><p>Explore on GitHub</p></a>
            </div>

            <div className="project-card-skyler">
            <h2>Learnify</h2>
            <p>A gamified web app that improves the focus, vocabulary, and mathematical skills of students with learning disabilities. </p>
            <a class="button" href="https://github.com/skylerbasco/Learnify" target="_blank"><p>Explore on GitHub</p></a>
            </div>
        </div>

        <h1 className='contact'> Contact 📩</h1>
        <p className='contact-content'>Want to connect, collaborate, or build something innovative together? I’m happy to chat about anything from CS to design to future projects. Feel free to shoot me a DM on LinkedIn or send a message through the form below! ⬇️</p>
        <form action="https://formspree.io/f/mzbopzgv" method="POST"> 
        <div className='contact-formspree'>
        <label classname='formspree-name'> Full Name <br/> <textarea name="name"  placeholder="Peter Parker"></textarea></label> 
        <br/>
        <br/>
        <label > Email Address <br/> <textarea name="email"  placeholder="spidermannowayhome@gmail.com"></textarea></label>
        <br/>
        <br/>
        <label> Message <br/> <textarea classname='formspree-message-box' name="message" placeholder="I'm your friendly neighborhood Spider-Man..."></textarea> </label>
        <br/>
        <br/>
        <button  type="submit" id="submit-btn-formspree"><p className='contact-formspree-button'>Submit</p></button>
        </div>
        </form>
    </div>

    

    );
  }

export default SkylerComponent