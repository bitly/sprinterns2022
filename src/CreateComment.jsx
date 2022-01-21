import React from 'react';
import Header from './Header.jsx';
import ReactDOM from 'react-dom';
import KVInputs from "./KVInputs.jsx";
import axios from 'axios';
import ReactJson from 'react-json-view'
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
            .post(SERVER_URL + 'savedetails', {f_name: first_name, l_name: last_name, email: email, subject: subject, comment: comment})
            .then((res) => {  

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
      <h1>Submit Commment</h1>
      <br />
      <label>First Name</label>
      <input value={first_name} type="text" name='first_name' onChange={(event) => setFirstName(event.target.value)} />
      <br />
      <label>Last Name</label>
      <input value={last_name} type="text" name='last_name' onChange={(event) => setLastName(event.target.value)} />
      <br />
      <label>Email</label>
      <input value={email} type="text" name= 'email' onChange={(event) => setEmail(event.target.value)} />
      <br />
      <label>Subject</label>
      <input value={subject} type="text" name='subject' onChange={(event) => SetSubject(event.target.value)} />
      <br />
      <label>Comment</label>
      <input value={comment} type="text" name='comment' onChange={(event) => SetComment(event.target.value)} />
      <br />
      <Link to ="/Forum"><button className="submit" onClick={handleSubmit}>Submit</button></Link>
      <button className="resetbutton" onClick={handleReset}>Reset</button>
    </>
  );
}


// const CreateComment = () => {
//     return(
//             <>
//             <Header />
//             <head>
//              <title>Add Comment</title>
//             </head>
//              <body>
//                     <h2>Add Comment</h2>
//                     <form action="/savedetails" method="post">
//                         <table> 
//                             <tr><td>First Name</td><td><input type="text" name="first_name"></input></td></tr>
//                             <tr><td>Last Name</td><td><input type="text" name="last_name"></input></td></tr>
//                             <tr><td>Email</td><td><input type="email" name="email"></input></td></tr>
//                             <tr><td>Subject</td><td><input type="text" name="subject"></input></td></tr>
//                             <tr><td>Comment</td><td><input type="text" name="comment"></input></td></tr>
//                             <tr><td><input type="submit" value="Submit" onClick ={SubmitComment}></input></td></tr>
//                         </table>
//                     </form>
//              </body> 
//         </>  

//     );

// }

export default CreateComment;