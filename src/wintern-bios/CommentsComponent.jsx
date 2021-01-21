import React from 'react';
import axios from 'axios';
const { useState, useEffect } = React; 

const CommentsComponent = ({bioToShow, color='red'}) => {

  

  const [comments, setComments] = useState([]);

  const clickComments = () => {
    axios
      .get('/get_comments')
      .then((res) => {   
        console.log('res', res);
        setComments(res.data)
      })   
      .catch((err) => console.log('error', err))
  } 
  useEffect(() => {
    clickComments()
  }, []);



  return (
      <>
     <form>
      <div>
        <label>Name</label>
        <input type="text" name="firstName" required />
        <label>Email Address</label>
        <input type="text" name="email" required />
      </div>
      <div>
        <label>Comment</label>
        <input type="text" name="comment" required />
      </div>
      <button onClick={() => clickComments()} type="submit">Post</button>
    </form>
    {comments.map((comment, index) => (
          <div key={index}>
          <p className="commentFormat">{comment.full_name} <span className="Date">{comment.created}</span> </p> 
          <p>{comment.comment} </p>   
          </div>
        ))}
    {/* <p>{thing}</p> */}
    <button onClick={clickComments}>plz push</button>
    </>
      );
}

export default CommentsComponent;