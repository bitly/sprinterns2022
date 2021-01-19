import * as React from 'react'
import * as ReactDOM from 'react-dom'

const APIExample = () => {
  const [height, setHeight] = React.useState(0);
  //change smileyCount and setSmileyCount, not needed
  const [smileyCount, setSmileyCount] = React.useState(0);

  const measuredRef = React.useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, [smileyCount]); //here too

   //David's example:
   //traditional promise-based way to get data using fetch()
    const getData = () => {
        var title= $("input[name='title']").val();
    fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + title + "&api_key=a11be34c1389ded0caa97d40a55dfe00")
            .then(function(response) {
              const data = response.json(); 
              console.log('response', data);
        });
    };

  //reminder:
        //change div class to className
        //fix array, the code below should not appear when the page loads
        //format javascript above to not only work but fit the overall site's code
        //remove all of smiley code, it should not continually add :) when you click on the button
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
 
export default APIExample;
