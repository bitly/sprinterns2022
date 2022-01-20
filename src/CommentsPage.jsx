import React from 'react';
import axios from 'axios';
import ReactJson from 'react-json-view';


const CommentsPage = () => {

    const { useState, useEffect } = React;
    const [post, setPost] = React.useState({});
    const SERVER_URL = "";


    axios.get(SERVER_URL + 'getComments').then((res) => {   
        setPost(res.data)
        
      }) 

    
 return (
        <div className="resultsBox"> 
        <center>
          <div>Results</div>
        </center>  
        <ReactJson src={post} theme="bright:inverted"/>
        </div> 
        );
}

export default CommentsPage;