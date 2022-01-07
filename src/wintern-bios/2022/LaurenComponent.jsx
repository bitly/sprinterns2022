import React from 'react';
import img from '../../assets/bio-photos/laurenpic.jpg';

const LaurenComponent = () => {
    return (
        <div className = "laurenbio">

            <img className='laurenpic' src={img}/>
            <h1 className = "fullname">Lauren Avilla</h1>
            <h1 className = "grade">Freshman @ Hunter College</h1>
            <h1 className = "major">Major: Computer Science</h1>
            <h1 className = "location"> Long Island, NY</h1>

            <h2 className = "aboutme">About Me</h2>
            <h4 className = "aboutmePARA">I’m a first generation Filipina American born and raised on Long Island, NY. Ever since moving to Manhattan for college, my love for NYC has grown more and more each day. Three words to describe myself are empathetic, curious, and driven. I recently got into film photography and creative writing! One of my favorite things in the world are conversations about self-care and mental health!</h4>
            
            <h2 className = "whyCS">Why CS?</h2>
            <h4 className = "whyCSPARA">Coding has demanded a new way of thinking from me, completely different from my humanities-focused way of thinking in English or history classes. I find myself more and more invigorated by programming because of the challenge it presents me. It is not just the satisfaction of successfully completing a code but also the beauty in the process itself that excites me. The endless problem-solving pushes me out of my comfort zone and allows me to grow as a thinker, programmer, and person.</h4>
           
            <h2 className = "bitly">Why I love being a Sprintern @ Bitly</h2>
            <h4 className = "bitlyPARA">The people! Despite this being my first tech internship, the generous guidance, expertise, and open arms of everyone at Bitly have made me feel comfortable, capable, and confident in my skills as a budding woman in tech. The 101 workshops have provided me with a wealth of knowledge and the new experiences I’ve gained thus far (i.e., frontend design) are ones that I will carry with me for the rest of my tech career!</h4>
            
            <h2 className = "hobbies">Hobbies</h2>
            <h4 className = "hobbiesPARA">My top three favorite hobbies are yoga, journaling, and thrifting. While I am not the most naturally flexible person out there, yoga challenges me physically and mentally. Everytime I roll out my mat, I feel at peace and grounded. Journaling is my favorite way to reflect on my day and understand my emotions better. I also love thrifting and finding cool pieces for my closet!</h4>

            <h2 className = "media">Favorite Media</h2>
            <h4 className = "mediaPARA">“Having a Coke with you” by Frank O'Hara (Poem){'\n'}“A True Account of Talking to the Sun at Fire Island” by Frank O’Hara (Poem){'\n'}“Small Doses with Amanda Seales” (Podcast){'\n'}“The Book of Awakening” by Mark Nepo (Book){'\n'}La La Land (Movie)</h4>

        </div>
    );
}

export default LaurenComponent;