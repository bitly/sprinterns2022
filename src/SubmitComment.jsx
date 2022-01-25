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
    
    deleteRow = (id, e) => {  
        const SERVER_URL = ""   
        axios
          .delete(SERVER_URL + '/comments/<comment_id>')  
          .then(res => {  
            console.log(res);  
            console.log(res.data);  
        
            const posts = this.state.posts.filter(item => item.id !== id);  
            this.setState({ posts });  
          })  
      }
    
    
    return (
      <>
        <Header />
        <div className='webContainer'>
        <div className='commentContainer'>
        <h1 className='submitHeader'>Submit Comment</h1>
        <div className='subjectContainer'>
        <label className='subjectLabel'>Subject of Comment</label>
        <input value={subject} type="text" name='subject' className='subectTextField' onChange={(event) => SetSubject(event.target.value)} />
        </div> 
        <br />
        <div className='firstNameContainer'>
        <label className='firstNameLabel'>First Name</label>
        <input value={first_name} type="text" name='first_name' className= 'firstNameTextField'onChange={(event) => setFirstName(event.target.value)} /> 
        </div>
        <br />
        <div className ='lastNameContainer'>
        <label className='lastNameLabel'>Last Name</label>
        <input value={last_name} type="text" name='last_name' className= 'lastNameTextField' onChange={(event) => setLastName(event.target.value)} /> 
        </div>
        <br />
        <div className='emailContainer'>
        <label className='emailLabel'>Email Address</label>
        <input value={email} type="text" name= 'email' className='emailTextField' onChange={(event) => setEmail(event.target.value)} /> 
        </div>
        <br />
        <div className='commentTextContainer'>
        <label className='commentLabel'>Your Comment</label>
        <input value={comment} type="text" name='comment' className='commentTextField' onChange={(event) => SetComment(event.target.value)} /> 
        </div> 
        <div className='buttonContainer'>
        <button className="resetButton" onClick={handleReset}>Reset</button> 
        <button className="btn btn-danger" onClick={(e) => this.deleteRow(post.id, e)}>Delete</button>  
        <Link to ="/Forum"><button className="submitButton" onClick={handleSubmit}>Submit</button></Link> 
        </div>
        </div>
        </div>
      </>
    );
}

export default SubmitComment;