import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
 import { useState } from 'react';
import './styles/main.scss';

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
       <div>
          <form>
            Title
          <input type="text" name="title" onChange={(event) => setTitle(event.target.value) }/>
          <input type="submit" id="button" onClick={() => getMovie() }/>
            {title}
          </form>
          {data && (<p>{data.poster_path}</p>) } 
          {data && (<p>{data.title}</p>)}
          {data && (<p>{data.original_language}</p>) }
          {data && (<p>{data.release_date}</p>) }
          {data && (<p>{data.vote_average}</p>) }  
          </div>
  );
}

export default APIExample;
