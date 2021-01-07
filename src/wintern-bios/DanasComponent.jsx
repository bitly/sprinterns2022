import React from 'react';

const DanasComponent = ({bioToShow, color='red'}) => {
    const { useState } = React;

    const [showStateEx, setShowStateEx] = useState(false);

    return (
        <div className='dana-bio'>
            <section class="showcase"></section>
            <hr/>
            <img className= "dana" alt="Dana Fishman"src="https://bit.ly/3onMGFx"/>
            <img className= "caticorn" alt="very cute kitty"src="https://www.flaticon.com/svg/static/icons/svg/3468/3468377.svg"/>
            <img className= "pride" alt="lgbt"src="https://www.flaticon.com/svg/static/icons/svg/2210/2210724.svg"/>
            <div class="text">
                <h2>Dana Fishman</h2> 
                <h3>World's Coolest Person</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.</p>
            </div>
        </div> 
    );
}

export default DanasComponent;
