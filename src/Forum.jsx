import React, { Children, useEffect, useState } from 'react';
import Header from './Header.jsx';
import {Link} from "react-router-dom";
import axios from 'axios';



const PostButton = ({buttonText}) => {
    return (
    <button className='NewComment'>{buttonText}</button>
    );
}

const FAQsButton = ({children}) => {
    return (
    <button className='FAQsButton'>{children}</button>
    );
}
const Comment = ({name,email,date,subject,commentText}) => {
    console.log(name,email,date,subject,commentText)
    return (
    <div className="comments">
    {/* <img className="avatar" src={rainbow}/> */}
    <div className="labelContainer">
    <div className="name">{name}</div>
    <div className="email">{email}</div>
    <div className="date">{date}</div>
    </div>
    <div className="subjectContainer">
    <div className="subject">{subject}</div>
    <div className="commentText">{commentText}</div>
    </div>
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

//  const handleRomve = asynch (id) = () => {
//     try{
//        const SERVER_URL = ""
//        const res = await axios.delete(SERVER_URL )

//      }
//  }

    return (
        <>
        <Header />
        <div className='webContainer'>
          <div className= "Forum">
            <h1 className="ForumHeader">FORUM</h1>
            <Link to ="/CreateComment"><PostButton buttonText="Post New Comment"></PostButton></Link>

            {comments.reverse().map( (comment) => {
                console.log(comment)
              return <Comment name = {comment.first_name + comment.last_name} email = {comment.email} date ={comment.created_date} subject = {comment.subject} commentText = {comment.comment}></Comment> 
            })}
            {/* <Link to ="/HelpCenter"><button className="returnButton">return</button></Link> */}
            <Link to ="/HelpCenter"><button id="foot"><button class="button-os"><a href="#">return to home</a></button></button></Link>
            <Link to ="/APIInfo"><button className='FAQsButton'>?</button></Link>
          </div>
          </div>
        </>
      );
      }
    
   export default Forum;