import React from 'react';
import img from '../../assets/bio-photos/79405.jpg';

const App = () => {
    const content = 'If life is so blue, then select another colour from the rainbow';

    const ele = '<span>' + content.split('').join('</span><span>') + '</span>';

}

const AngesComponent = () => {

    return (

        

        <div className='ancontainer'>

            <div id="scroll-container">
            <div id="scroll-text">&#x1F338; Hi, My name is Ange &#x1F338;</div>
            </div>
            <img src = {img}/>
            <div className='contact'>
               <div><h3>CONTACT INFORMATION &#x1F4DE;</h3></div>
               <div><h4>LinkedIn: linkedin.com/in/ange-louis</h4></div> 
               <div><h4>Github: github.com/angelouis</h4></div> 
                
            </div>
            <div className='aboutme'>
             <p class="type">Here is some information about me :) </p>

             <p class="type">Tim Hortons queues too keener to the donair, and its 
             garburator -- igloo Canuck melted, eh? Maclean's magazine ranked pop first of tuque beer Canada's puck pissed 
             Tim Hortons hoser.</p>

             <p class="type">My name is Ange Louis and I am </p>

            </div>
            
        
        
        </ div>
    );

}

export default AngesComponent;