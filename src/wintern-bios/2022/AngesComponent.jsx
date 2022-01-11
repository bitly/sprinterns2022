import React from 'react';
import img from '../../assets/bio-photos/79405.jpg';

function clickMe() {
    alert('In my defense, I was left unsupervised.');
}


const AngesComponent = () => {

    return (

        

        <div className='ancontainer'>

            <div id="scroll-container">
            <div id="scroll-text">&#x1F338; Hi, My name is Ange &#x1F338;</div>
            </div>
            <img src = {img} />
            <div className='buton'>
                <button onClick={clickMe}>Click for an inspirational work quote!</button>
            </div>
            <div className='contact'>
               <div><h3>CONTACT INFORMATION &#x1F4DE;</h3></div>
               <div><h4>LinkedIn: <a href="https://www.linkedin.com/in/ange-louis/" >linkedin.com/in/ange-louis</a></h4></div> 
               <div><h4>Github: <a href= "https://www.github.com/angelouis">github.com/angelouis</a></h4></div> 
                
            </div>
            <div className='aboutme'>
             <p class="type">Here is some information about me :) </p>

             <p class="type">My name is Ange Louis and I am a junior at City College. I am a Computer 
             Engineering Major. I am from Brookyn, NY. I can speak two languages. I recently got my driver's license
             so watch out world</p>

             <p class="type">Things That I Like: I love the horror genre. My favorite show is The Walking 
             Dead. It has prepared me for a zombie apocalypse. I also love watching streamers play video 
             games</p>

             <p class="type">My Career Goals: My goal is to become a software engineer. Besides that, I would love to 
             own a business, specifically an ice cream shop.</p>

            </div>
            
        
        
        </ div>
    );

}

export default AngesComponent;
