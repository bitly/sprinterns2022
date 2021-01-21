import React from 'react';
import { useAttribute } from 'react';
import { useState } from 'react';

const APIinfo = ({bioToShow, color='red'}) => {
    const { useState } = React;

    // const [showStateEx, setShowStateEx] = useState(false);

    const randomNum = Math.random();
    // const items = document.querySelectorAll(".accordion button");

    // function toggleAccordion() {
    // const itemToggle = this.getAttribute('aria-expanded');

    // for (i = 0; i < items.length; i++) {
    //     items[i].setAttribute('aria-expanded', 'false');
    // }

    // if (itemToggle == 'false') {
    //     this.setAttribute('aria-expanded', 'true');
    // }
    // }
    // items.forEach(item => item.addEventListener('click', toggleAccordion));

    const toggleClick = () => {
        //expand to show content
        

    }
    const items = [
        {id: "accordion-button-1", title: "Why is the moon sometimes out during the day?", content: "Why is the moon sometimes out during the day?"},
        {id: "accordion-button-2", title: "Why is the moon sometimes out during the day?", content: "Why is the moon sometimes out during the day?"},
        {id: "accordion-button-3", title: "Why is the moon sometimes out during the day?", content: "Why is the moon sometimes out during the day?"},
        {id: "accordion-button-4", title: "Why is the moon sometimes out during the day?", content: "Why is the moon sometimes out during the day?"},
        {id: "accordion-button-5", title: "Why is the moon sometimes out during the day?", content: "Why is the moon sometimes out during the day?"}
        ]


    const AccordionItem = (props) => {
        const [showContent, setShowContent] = useState(false)
        console.log(props.id, "showContent", showContent)
        const toggleContent = () => setShowContent(!showContent)

        return( 
        <div className="accordion-item">
            <button id={props.id} onClick = {toggleContent}><span className="accordion-title">{props.title}</span><span className="icon"></span></button>
            {showContent ? (<div className="accordion-content">
                <p>{props.content}</p>
            </div>): null} 
        </div>)
    }

    return (
        <>
        <img className="wintern-chauncey" alt="confused chauncey" src="https://bit.ly/3bYJZqW"/>
        <img className="speech-bubble" alt="whats an api" src="https://i.pixelspeechbubble.com/bQ6wPCRy/pixel-speech-bubble.gif"/>
        <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="accordion">
                {items.map(
                    (item, i)=>(<AccordionItem key={i} id={item.id} onClick={item.onClick} title={item.title} content={item.content} />)
                )}
            </div>
        </div>
        <p>Still confused? Watch this video (Thanks David).</p>
        <iframe width="420" height="315"src="https://www.youtube.com/embed/s7wmiS2mSXY"/>
        </>
    );
}

export default APIinfo;