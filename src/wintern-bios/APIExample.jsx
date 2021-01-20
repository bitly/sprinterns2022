import React from 'react';
import { useState } from 'react';

const APIExample = () => {
  const { useState } = React;

  const [title, setTitle] = useState('');

  const [data, setData] = useState({});


const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + title + "&api_key=a11be34c1389ded0caa97d40a55dfe00")
            .then(function(response) {
            return response.json();
            })
            .then(function(response) {
            console.log('second', response.results[0]);
            setData(response.results[0]);
            });
    };


  return (
       <div className= "api-form">
          <form>
            <h1 className="categoryTitle">Title</h1>
            <input type="text" className= "userInput" onChange={(event) => setTitle(event.target.value) }/>
            <input type="submit" className= "userInput" onClick={() => getMovie() }/>
          </form>
          <div className="">
            {data && (<img className = "poster" src = {'https://image.tmdb.org/t/p/w500/' + data.poster_path}></img>)}
            {data && (<p>Title: {data.title}</p>)}
            {data && (<p>Language: {data.original_language}</p>) }
            {data && (<p>Overview: {data.overview}</p>) }
            {data && (<p>Release Date: {data.release_date}</p>) }
            {data && (<p> Vote Average: {data.vote_average}</p>) }
          </div>  
        </div>
  );
}

export default APIExample;
