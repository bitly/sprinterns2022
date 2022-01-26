import React from 'react';
import Header from './Header.jsx';
import ReactDOM from 'react-dom';
import KVInputs from "./KVInputs.jsx";
import axios from 'axios';
import ReactJson from 'react-json-view';
import { Link } from 'react-router-dom';




    

const CreateComment = () => { 

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
            setResponse(res.data)
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
        <div className='webContainers'>
        <div className='commentContainers'>
        <h1 className='submitHeaders'>Submit Comment</h1>
        <div className='subjectContainers'>
        <label className='subjectLabels'>Subject of Comment</label>
        <input value={subject} type="text" name='subject' className='subectTextFields' onChange={(event) => SetSubject(event.target.value)} />
        </div> 
        <br />
        <div className='firstNameContainers'>
        <label className='firstNameLabels'>First Name</label>
        <input value={first_name} type="text" name='first_name' className= 'firstNameTextFields'onChange={(event) => setFirstName(event.target.value)} /> 
        </div>
        <br />
        <div className ='lastNameContainers'>
        <label className='lastNameLabels'>Last Name</label>
        <input value={last_name} type="text" name='last_name' className= 'lastNameTextFields' onChange={(event) => setLastName(event.target.value)} /> 
        </div>
        <br />
        <div className='emailContainers'>
        <label className='emailLabels'>Email Address</label>
        <input value={email} type="text" name= 'email' className='emailTextFields' onChange={(event) => setEmail(event.target.value)} /> 
        </div>
        <br />
        <div className='commentTextContainers'>
        <label className='commentLabels'>Your Comment</label>
        <input value={comment} type="text" name='comment' className='commentTextFields' onChange={(event) => SetComment(event.target.value)} /> 
        </div> 
        <div className='buttonContainers'>
        <button className="resetButtons" onClick={handleReset}>Reset</button> 
        <Link to ="/Forum"><button className="submitButtons" onClick={handleSubmit}>Submit</button></Link> 
        </div>
        </div>
        </div>
      </>
    );
}

export default CreateComment;
