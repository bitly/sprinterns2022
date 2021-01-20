import React from 'react';

const APIinfo = ({bioToShow, color='red'}) => {
    const { useState } = React;

    const [showStateEx, setShowStateEx] = useState(false);

    const randomNum = Math.random();

    return (
        <>
        <img className= "speech-bubble" alt="what is an api" src="https://i.pixelspeechbubble.com/bQ6wPCRy/pixel-speech-bubble.gif"/>
        <img className= "wintern-chauncey" alt="confused chaunce" src="https://bit.ly/3bYJZqW"/>
        <div id="wrapper">
            <ul>
                <li>
                    <input type="checkbox" checked/>
                    <i></i>
                    <h2>What is Lorem Ipsum ?</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </li>
                <li>
                    <input type="checkbox" checked/>
                    <i></i>
                    <h2>Why do we use it ?</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </li>
                <li>
                    <input type="checkbox" checked/>
                    <i></i>
                    <h2>Wher we can it ?</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </li>
            </ul>
        </div>
        </>
    );
}

export default APIinfo;