import React from 'react';
import img from '../../assets/bio-photos/laurenpic.jpg';

const LaurenComponent = () => {
    return (
        <div className = "laurenbio">

            <img className='laurenpic' src={img}/>
            <br/>
            <h1 className = "fullname">Lauren Avilla</h1>
            <h1 className = "grade">Freshman at Hunter College</h1>
            <h1 className = "major">Major: Computer Science</h1>
            <h1 className = "location"> Long Island, NY</h1>
 
            <h2 className = "aboutme"><i>ABOUT ME!</i><br/><br/>I’m a first generation Filipina American born and raised on Long Island, NY. Ever since moving to Manhattan for college, my love for NYC has grown more and more each day. Three words to describe myself are empathetic, curious, and driven. I recently got into film photography and creative writing! One of my favorite things in the world are conversations about self-care and mental health!</h2>
            <br/>

            <h2 className = "whyCS"><i>WHY CS!</i><br/><br/>Coding has demanded a new way of thinking from me, completely different from ny other type of field. I find myself more and more invigorated by programming because of the challenge it presents me. It is not just the satisfaction of successfully completing a code but also the beauty in the process itself that excites me. The endless problem-solving pushes me out of my comfort zone and allows me to grow as a thinker, programmer, and person.</h2>
            <br/>

            <h2 className = "bitly"><i>WHY I LOVE BEING A SPRINTERN @ BITLY</i><br/><br/>The people! Despite this being my first tech internship, the generous guidance, expertise, and open arms of everyone at Bitly have made me feel comfortable, capable, and confident in my skills as a budding woman in tech. The 101 workshops have provided me with a wealth of knowledge and the new experiences I’ve gained thus far (i.e., frontend design) are ones that I will carry with me for the rest of my tech career!</h2>
            <br/>

            <h2 className = "hobbies"><i>MY HOBBIES</i><br/><br/>My top three favorite hobbies are yoga, journaling, and thrifting. While I am not the most naturally flexible person out there, yoga challenges me physically and mentally. Everytime I roll out my mat, I feel at peace and grounded. Journaling is my favorite way to reflect on my day and understand my emotions better. I also love thrifting and finding cool pieces for my closet!</h2>
            <br/>

            <h2 className = "media"><i>MY FAVORITE MEDIA</i><br/><br/>“A True Account of Talking to the Sun at Fire Island” by Frank O’Hara (Poem)<br/>“Small Doses with Amanda Seales” (Podcast)<br/>“The Book of Awakening” by Mark Nepo (Book)</h2>
            <br/>

            <button> Button</button>

        </div> 
    );
}

export default LaurenComponent;