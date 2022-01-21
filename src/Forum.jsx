import React, { useEffect, useState } from 'react';
import Header from './Header.jsx';
import {Link} from "react-router-dom";
import axios from 'axios';



const PostButton = ({buttonText}) => {
    return (
    <button className='NewComment'>{buttonText}</button>
    );
}
const FAQsButton = ({buttonText}) => {
    return (
    <button className='FAQsButton'>{buttonText}</button>
    );
}
const Comment = ({name,email,date,subject,commentText}) => {
    return (
    <div className="comments">
    {/* <img className="avatar" src={rainbow}/> */}
    <div className="name">{name}</div>
    <div className="email">{email}</div>
    <div className="date">{date}</div>
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

    return (
        <>
        <Header />
          <div className= "Forum">
            <h1 className="ForumHeader">Help Center Forum</h1>
            <Link to ="/CreateComment"><PostButton buttonText="Post New Comment"></PostButton></Link> 
            {comments.map( (commentArray) => {
              return <Comment name = {commentArray[1] + commentArray[2]} email = {commentArray[3]} date ={commentArray[4]} subject = {commentArray[5]} commentText = {commentArray[6]}></Comment> 
            })}
            {/* <Link to ="/HelpCenter"><button className="returnButton">return</button></Link> */}
            <Link to ="/HelpCenter"><button id="foot"><button class="button-os"><a href="#">return</a></button></button></Link>
            <Link to ="/APIInfo"><FAQsButton className="FAQSButton">FAQS</FAQsButton></Link>
          </div>
        </>
      );
      }
    
   export default Forum;