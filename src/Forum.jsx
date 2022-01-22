import React, { useEffect, useState } from 'react';
import Header from './Header.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostButton = ({buttonText}) => {
  return (
  <button className='NewComment'>{buttonText}</button>
  );
}

const Comment = ({name,email,date,subject,commentText}) => {
  return (
  <div className="comments">
  <div className='labelContainer'>
  <div className="date">{date}</div>
  <div className="name">{name}</div>
  <div className="email">{email}</div>
  </div>
  <div className="subject">{subject}</div>
  <div className="commentText">{commentText}</div>
  </div>
  );
}

const Forum = () => {  
  const [comments,setComments] = useState([])

  useEffect(()=>{
    const getComments = () => {
      const SERVER_URL = ""
      axios
      .get(SERVER_URL + 'getComments')
      .then((res) => {   
        setComments(res.data)
        console.log(res.data);
      }) 
    } 
    getComments();
  },[]) 

  
// const handleRomve = asynch (id) = () => {
//     try{
//       const SERVER_URL = ""
//       const res = await axios.delete(SERVER_URL )

//     }
  // }
    // axios 
      // .delete(SERVER_URL + 'savedetails'/ {data: {id}})
      // // .post(SERVER_URL + 'savedetails', {f_name: first_name, l_name: last_name, email: email, subject: subject, comment: comment})
      // .then((res) => {   
      //   // setResponse(res.data)
      // })   
  // } 

  return (
    <>
    <Header />
    <div className='webContainer'>
      <div className= "Forum">
        <h1 className="ForumHeader">Help Center Forum
        <Link to ="/Submit"><PostButton buttonText="Post New Comment"></PostButton></Link> 
        </h1>
        {comments.map( (commentArray) => {
          return <Comment name = {commentArray[1]+commentArray[2]} email = {commentArray[3]} date ={commentArray[4]} subject = {commentArray[5]} commentText = {commentArray[6]}></Comment> 
        })}
      </div>
    </div>
    </>
  );
  }

export default Forum;

//we will run this function everytime componenet re-renders, inside depency changes we will rerun

//network request, cannot be sequential, asychronus something need to be
//processed in a que, seperate
//eventloop (javascript), everything asynchrnus is on the loop and runs on the side of the code
//keep checking until data run callback function after succeful execution of network request
//idea of network request side effect
//usestate, program rerender, doesnt need to reload, it knows when probs and state and useeffect and will
//runs when component refreshes
//async allows to write pretty stright forward
//axios .then (promise, res data you will get back), promise syntax

//create some state
//save data into response
//save data, map data into components, return name is equal to variable, map function 
