import React from 'react';

const DanasComponent = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
    <div className='dana-bio'>
        <h1 className='title'> Dana Fishman </h1>
        <hr/>
        <p>Hello there!</p> 
        <img className= "dana" alt="Dana Fishman"src="https://bit.ly/3onMGFx"/>
        <img className= "caticorn" alt="very cute kitty"src="https://www.flaticon.com/svg/static/icons/svg/3468/3468377.svg"/>
        <img className= "pride" alt="lgbt"src="https://www.flaticon.com/svg/static/icons/svg/2210/2210724.svg"/>
    </ div> 
  );
}

export default DanasComponent;