import React from 'react';
import chauncey from '../assets/miscellaneous/chauncey.jpg';
import speech from '../assets/miscellaneous/pixel-speech-bubble.gif';


const APIinfo = () => {
    const { useState } = React;

    const items = [
        {id: "accordion-button-1", title: "Why is the moon sometimes out during the day?", content:"hi"},
        {id: "accordion-button-2", title: "Why is the moon sometimes out during the day?", content:"hi"},
        {id: "accordion-button-3", title: "Why is the moon sometimes out during the day?", content:"hi"},
        {id: "accordion-button-4", title: "Why is the moon sometimes out during the day?", content:"hi"},
        {id: "accordion-button-5", title: "Why is the moon sometimes out during the day?", content:"hi"}
        ]


    const AccordionItem = (props) => {
        const [showContent, setShowContent] = useState(false)
        console.log(props.id, "showContent", showContent)
        const toggleContent = () => setShowContent(!showContent)

        return( 
        <div className="accordion-item">
            <div className="accordion-button">
                <button id={props.id} onClick = {toggleContent}><span className="accordion-title">{props.title}</span><span className="icon"></span></button>
                {showContent ? (<div className="accordion-content">
                    <p>{props.content}</p>
                </div>): null} 
            </div>
        </div>)
    }

    return (
        <div className="api-info">
        <img className="wintern-chauncey" alt="confused chauncey" src={chauncey}/>
        <img className="speech-bubble" alt="whats an api" src={speech}/>
        <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="accordion">
                {items.map(
                    (item, i)=>(<AccordionItem key={i} id={item.id} onClick={item.onClick} title={item.title} content={item.content} />)
                )}
            </div>
        </div>
        <div className="video">
        <p>Still confused? Watch this video (Thanks David).</p>
        <iframe width="420" height="315"src="https://www.youtube.com/embed/s7wmiS2mSXY"/>
        </div>
        </div>
    );
}

export default APIinfo;