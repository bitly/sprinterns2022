import React from 'react';
import { useAttribute } from 'react';
import { useState } from 'react';
import chauncey from '../assets/miscellaneous/chauncey.jpg';
import speech from '../assets/miscellaneous/pixel-speech-bubble.gif';


const APIinfo = ({bioToShow, color='red'}) => {
    const { useState } = React;

    const [showStateEx, setShowStateEx] = useState(false);

    const randomNum = Math.random();const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
    }
    items.forEach(item => item.addEventListener('click', toggleAccordion));
    return (
        <>
        <img className="wintern-chauncey" alt="confused chauncey" src={chauncey}/>
        <img className="speech-bubble" alt="whats an api" src={speech}/>
        <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="accordion">
                <div className="accordion-item">
                    <button id="accordion-button-1" aria-expanded="false"><span className="accordion-title">Why is the moon sometimes out during the day?</span><span className="icon" aria-hidden="true"></span></button>
                    <div className="accordion-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                    </div>
                </div>
                <div className="accordion-item">
                    <button id="accordion-button-2" aria-expanded="false"><span className="accordion-title">Why is the sky blue?</span><span className="icon" aria-hidden="true"></span></button>
                    <div className="accordion-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                    </div>
                </div>
                <div className="accordion-item">
                    <button id="accordion-button-3" aria-expanded="false"><span className="accordion-title">Will we ever discover aliens?</span><span className="icon" aria-hidden="true"></span></button>
                    <div className="accordion-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                    </div>
                </div>
                <div className="accordion-item">
                    <button id="accordion-button-4" aria-expanded="false"><span className="accordion-title">How much does the Earth weigh?</span><span className="icon" aria-hidden="true"></span></button>
                    <div className="accordion-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                    </div>
                </div>
                <div className="accordion-item">
                    <button id="accordion-button-5" aria-expanded="false"><span className="accordion-title">How do airplanes stay up?</span><span className="icon" aria-hidden="true"></span></button>
                    <div className="accordion-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                    </div>
                </div>
            </div>
        </div>
        <p>Still confused? Watch this video (Thanks David).</p>
        <iframe width="420" height="315"src="https://www.youtube.com/watch?v=s7wmiS2mSXY"/>
        </>
    );
}

export default APIinfo;