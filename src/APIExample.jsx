import * as React from 'react'
import * as ReactDOM from 'react-dom'

const App = () => {
  const [height, setHeight] = React.useState(0);
  const [smileyCount, setSmileyCount] = React.useState(0);

  const measuredRef = React.useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, [smileyCount]);

  return (
    <div>
      <h1 ref={measuredRef}><div>Hello, world</div>{new Array(smileyCount).fill('').map(() =>  <div class="movieData">
      <p id="poster"></p>    
      
      <div class="categoryTitle">Popularity</div>
      <p id="popularity"></p>    
      
      <div class="categoryTitle">Plot</div>
      <p id="plot"></p>
      
      <div class="categoryTitle">Genre</div>
      <p id="genre"></p>
      
      <div class="categoryTitle">Year</div>
      <p id="release-date"></p>
      
      <!--<div class="categoryTitle">Country</div>
      <p id="country"></p> -->
      
      <!-- <div class="categoryTitle">Director</div>
      <p id="director"></p> -->
      
      <div class="categoryTitle">Language</div>
      <p id="language"></p>
   </div>
   
   <div id="error"></div>)}

      <button onClick={() => setSmileyCount(smileyCount+1)}>Make it taller</button>
    </div>
  );
}

ReactDOM.render(
  <div className="App">
    <App/>
  </div>,
  document.getElementById('root')
);
