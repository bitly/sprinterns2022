import React from 'react';
import img from '../../assets/bio-photos/laurenpic.jpg';
import img2 from "../../assets/bio-photos/githublogo.png";
import img3 from "../../assets/bio-photos/linkedinlogo.png";

const LaurenComponent = () => {
    return (
        <div className = "laurenbio">

            <a href="https://github.com/lauren-avilla">
                <img className = "github" src={img2} />
            </a>
            
            <a href = "https://www.linkedin.com/in/lauren-avilla-071467229/">
                <img className = "linkedin" src={img3} />
            </a>

            <img className='laurenpic' src={img}/>
            <br/>
            <h1 className = "fullname">Lauren Avilla</h1>
            <h2 className = "grade">Freshman at Hunter College</h2>
            <h2 className = "major">Major: Computer Science</h2>
            <h2 className = "location"> Long Island, NY</h2>
 
            <h2 className = "aboutme"><i>ABOUT ME</i><br/><br/>I’m a first generation Filipina American born and raised on Long Island, NY. Ever since moving to Manhattan for college, my love for NYC has grown more and more each day. Three words to describe myself are empathetic, curious, and driven. I recently got into film photography and creative writing! I love having conversations about self-care and mental health!</h2>
            <br/>

            <h2 className = "whyCS"><i>WHY COMPUTER SCIENCE</i><br/><br/>Coding demands a new way of thinking from me. I feel invigorated by programming because of the challenge it presents me. It is not just the satisfaction of successfully completing a code but also the beauty in the process itself that excites me. The endless problem-solving pushes me out of my comfort zone and allows me to grow as a thinker, programmer, and person.</h2>
            <br/>

            <h2 className = "bitly"><i>WHY I LOVE BEING A SPRINTERN @ BITLY</i><br/><br/>The people! Despite this being my irst tech internship, the generous guidance, expertise, and open arms of everyone at Bitly have made me feel comfortable, capable, and confident in my skills as a budding woman in tech. The 101 workshops have provided me with a wealth of knowledge and the new experiences I’ve gained thus far (i.e., frontend design) are ones that I will carry with me for the rest of my tech career!</h2>
            <br/>

            <h2 className = "hobbies"><i>MY HOBBIES</i><br/><br/>My top three favorite hobbies are yoga, journaling, and thrifting. While I am not the most naturally flexible person out there, yoga challenges me physically and mentally. Everytime I roll out my mat, I feel at peace and grounded. Journaling is my favorite way to reflect on my day and understand my emotions better. I also love thrifting and finding cool pieces for my closet!</h2>
            <br/>

            <h2 className = "media"><i>MY FAVORITE MEDIA</i><br/><br/>“A True Account of Talking to the Sun at Fire Island” by Frank O’Hara (Poem)<br/>“Small Doses with Amanda Seales” (Podcast)<br/>“The Book of Awakening” by Mark Nepo (Book)</h2>
            <br/>

        

        </div> 
    );
}

export default LaurenComponent;