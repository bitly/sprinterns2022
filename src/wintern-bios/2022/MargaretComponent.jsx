import React from 'react';
var randomColor = Math.floor(Math.random()*16777215).toString(16);

const MargaretComponent = () => {
 return (
    <div>
      <p> Margaret Diaz Bio </p>
      
    </div>
 );
}

//function FunColors() {
// for (i = 0; i < 10; i++) {
//    document.body.style.backgroundColor = 'rgb(' + i*20 + ',' + 0 + ',' + 0 + ')';
 // }
//}

setInterval(
  function () {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#"+randomColor;
  },1000);

export default MargaretComponent;