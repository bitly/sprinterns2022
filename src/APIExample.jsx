import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
 import { useState } from 'react';
import './styles/main.scss';

// componentDidMount() {
//     const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => console.log('This is your data', data));
//   }
   //David's example:
   //traditional promise-based way to get data using fetch()


// const [title, setTitle] = useState('');



//   //reminder:
//         //change div class to className
//         //fix array, the code below should not appear when the page loads
//         //format javascript above to not only work but fit the overall site's code
//         //remove all of smiley code, it should not continually add :) when you click on the button
//   return (
//       <div>
//           <form>
//             Title
//           <input type="text" name="title" onChange={() => setTitle() }/>
//           <input type="submit" id="button" value="Submit"/>
//             {title}
//           </form>
//       </div>
// //     <div>
// //       <h1 ref={measuredRef}><div>Hello, world</div>{new Array(smileyCount).fill('').map(() =>  <div class="movieData">
// //       <p id="poster"></p>    
      
// //       <div class="categoryTitle">Popularity</div>
// //       <p id="popularity"></p>    
      
// //       <div class="categoryTitle">Plot</div>
// //       <p id="plot"></p>
      
// //       <div class="categoryTitle">Genre</div>
// //       <p id="genre"></p>
      
// //       <div class="categoryTitle">Year</div>
// //       <p id="release-date"></p>
      
// //       <!--<div class="categoryTitle">Country</div>
// //       <p id="country"></p> -->
      
// //       <!-- <div class="categoryTitle">Director</div>
// //       <p id="director"></p> -->
      
// //       <div class="categoryTitle">Language</div>
// //       <p id="language"></p>
// //    </div>
   
// //    <div id="error"></div>)}

// //       <button onClick={() => setSmileyCount(smileyCount+1)}>Make it taller</button>
// //     </div>
//   );
// }
 



const APIExample = () => {
  const { useState } = React;

  const [title, setTitle] = useState('');

  const [data, setData] = useState({});

const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + title + "&api_key=a11be34c1389ded0caa97d40a55dfe00")
            .then(function(response) {
            // code here 1
            return response.json();
            })
            .then(function(response) {
            // code here 2
            console.log('second', response.results[0]);
            setData(response.results[0]);
            });
    };


  return (
       <div>
          <form>
            Title
          <input type="text" name="title" onChange={(event) => setTitle(event.target.value) }/>
          <input type="submit" id="button" onClick={() => getMovie() }/>
            {title}
          </form>
          {data && (
            <h1>{data.title}</h1>
          )}
            
          </div>
        
  );
}

export default APIExample;
