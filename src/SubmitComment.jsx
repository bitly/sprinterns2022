import React from 'react';
import Header from './Header.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';




    

const SubmitComment = () => { 

    const { useState, useEffect} = React;

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, SetSubject] = useState('');
    const [comment, SetComment] = useState('');



    const handleSubmit = () => {
        const SERVER_URL = ""
        axios
          .post(SERVER_URL + 'comments', {f_name: first_name, l_name: last_name, email: email, subject: subject, comment: comment})
          .then((res) => {   
            // setResponse(res.data)
          })   
      } 
    
    const handleReset = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        SetSubject('');
        SetComment('');
      }

    
    
    return (
      <>
        <Header />
        <div className='webContainer'>
        <div className='commentContainer'>
        <h1 className='submitHeader'>Submit Comment</h1>
        <div className='subjectContainer'>
        <label className='subjectLabel' for='subjectText'>Subject of Comment</label>
        <input value={subject} type="text" id="subjectText" name='subject' className='subectTextField' onChange={(event) => SetSubject(event.target.value)} />
        </div> 
        <br />
        <div className='firstNameContainer'>
        <label className='firstNameLabel' for ="firstNameText">First Name</label>
        <input value={first_name} type="text" id="firstNameText" name='first_name' className= 'firstNameTextField'onChange={(event) => setFirstName(event.target.value)} /> 
        </div>
        <br />
        <div className ='lastNameContainer'>
        <label className='lastNameLabel' for="lastNameText">Last Name</label>
        <input value={last_name} type="text" id="lastNameText" name='last_name' className= 'lastNameTextField' onChange={(event) => setLastName(event.target.value)} /> 
        </div>
        <br />
        <div className='emailContainer'>
        <label className='emailLabel' for="emailText">Email Address</label>
        <input value={email} type="text" id="emailText" name= 'email' className='emailTextField' onChange={(event) => setEmail(event.target.value)} /> 
        </div>
        <br />
        <div className='commentTextContainer'>
        <label className='commentLabel' for="commentText">Your Comment</label>
        <input value={comment} id="commentText" type="text" name='comment' className='commentTextField' onChange={(event) => SetComment(event.target.value)} /> 
        </div> 
        <div className='buttonContainer'>
        <button className="resetButton" onClick={handleReset}>Reset</button> 
        <Link to ="/Forum"><button className="submitButton" onClick={handleSubmit}>Submit</button></Link> 
        </div>
        </div>
        </div>
      </>
    );
}

export default SubmitComment;