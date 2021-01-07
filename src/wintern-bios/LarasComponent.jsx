import React from 'react';

const LarasComponent = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
       <div className='larabio'>
           <h1 className='title'> bio: Lara Choudhury </h1>
            <div>
                <p className='first'> Hi, I am Lara Choudhury. I am 19 years old. </p>
                <p> I am an upper sophmore at John Jay College of Criminal Justice. </p>
                <p> I am majoring in Computer Science and Information Security. </p>
                <p> I also work in a family Real Estate Business with my parents.</p>
                <p> I come from a diverse background where my mom is Puerto Rican and my dad is Indian. </p>
                <p> I speak fluent spanish and can understand a little hindi. </p>
                <p> I have two sisters one is 5 and the other is thirteen.</p>
            </div>
       </div>
  );
}
export default LarasComponent;