import React from 'react';
import Header from './Header.jsx';
import ReactDOM from 'react-dom';
import KVInputs from "./KVInputs.jsx";
import axios from 'axios';
import ReactJson from 'react-json-view';
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
          .post(SERVER_URL + 'savedetails', {f_name: first_name, l_name: last_name, email: email, subject: subject, comment: comment})
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
    
    const ForumButton = ({buttonText}) => {
        return (
        <button>{buttonText}</button>
        );
      }
    
    
    return (
      <>
        <Header />
        <div className='webContainer'>
        <div className='commentContainer'>
        <h1 className='submitHeader'>Submit Commment</h1>
        <br />
        <div className='subjectContainer'>
        <label className='subjectLabel'>Subject</label>
        <input value={subject} type="text" name='subject' className='subectTextField' onChange={(event) => SetSubject(event.target.value)} />
        </div> 
        <br />
        <label className='firstNameLabel'>First Name</label>
        <label className='lastNameLabel'>Last Name</label>
        <br />
        <div className ='textFeildContainer'>
        <input value={first_name} type="text" name='first_name' className= 'firstNameTextField'onChange={(event) => setFirstName(event.target.value)} /> 
        <input value={last_name} type="text" name='last_name' className= 'lastNameTextField' onChange={(event) => setLastName(event.target.value)} /> 
        </div>
        <br />
        <label className='emailLabel'>Email</label>
        <input value={email} type="text" name= 'email' className='emailTextField' onChange={(event) => setEmail(event.target.value)} /> 
        <br />
        <label className='commentLabel'>Comment</label>
        <input value={comment} type="text" name='comment' className='commentTextField' onChange={(event) => SetComment(event.target.value)} /> 
        <br /> 
        <Link to ="/Forum"><button className="submitButton" onClick={handleSubmit}>Submit</button></Link> 
        <button className="resetButton" onClick={handleReset}>Reset</button> 
        </div>
        </div>
      </>
    );
}

export default SubmitComment;