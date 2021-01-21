import React from 'react';
import img from '../assets/bio-photos/DanaIcon.jpg';

const DanasComponent = ({bioToShow, color='red'}) => {
    const { useState } = React;

    const [showStateEx, setShowStateEx] = useState(false);

    const randomNum = Math.random();



    return (
        <div className='dana-bio'>
<<<<<<< HEAD
            <section className="showcase">
                <img className= "dana" alt="Dana Fishman"src="https://bit.ly/3onMGFx"/>
=======
            <section class="showcase">
                <img className= "dana" alt="Dana Fishman"src={img}/>
>>>>>>> c72f428dd078ef7b43e8201ca03329212e343988
                <img className= "caticorn" alt="very cute kitty"src="https://www.flaticon.com/svg/static/icons/svg/3468/3468377.svg"/>
                <img className= "pride" alt="lgbt"src="https://www.flaticon.com/svg/static/icons/svg/2210/2210724.svg"/>
                <div className="container">
                    <a className="btn-scroll btn-scroll-fuchsia " name="setup" href="#setup">
                        <div className="btn-scroll-arrow">
                            <svg><use href="#scroll-down"></use></svg>
                                <svg id="scroll-down" viewBox="643.5 386 22.1 21.9">
                                    <path d="M665.6,396.3c0,0.3-0.1,0.7-0.4,0.9l-9.8,10.4c-0.5,0.5-1.3,0.5-1.7,0l-9.8-10.4c-0.5-0.5-0.5-1.3,0-1.8
                                    s1.3-0.5,1.7,0l8.9,9.5l8.9-9.5c0.5-0.5,1.3-0.5,1.7,0C665.5,395.6,665.6,396,665.6,396.3z">
                                        <path d="M665.6,387.3c0,0.3-0.1,0.7-0.4,0.9l-9.8,10.4c-0.5,0.5-1.3,0.5-1.7,0l-9.8-10.4c-0.5-0.5-0.5-1.3,0-1.8
                                        s1.3-0.5,1.7,0l8.9,9.5l8.9-9.5c0.5-0.5,1.3-0.5,1.7,0C665.5,386.6,665.6,387,665.6,387.3z">
                                        </path>
                                    </path>
                                </svg>
                        </div>
                    </a>
                    <div className="text">
                        <h2>Dana Fishman</h2> 
                        <h3>World's Coolest Person</h3>
                    </div>
                    <div className="text2">
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                    </div>
                </div>
                <div className="imageInn">
                    <img src="http://l.wigflip.com/WV4yTWTg/wigflip-ds.gif" />
                </div>
                <div className="hoverImg">
                    <img src="https://www.flaticon.com/svg/vstatic/svg/539/539828.svg?token=exp=1610650979~hmac=6463ac924a0e06b3f1ccee63ce3e4dab" />
                </div>
            </section>
        </div> 
    );
}

export default DanasComponent;
