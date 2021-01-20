import React from 'react';
import axios from 'axios'

const CommentsComponent = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [thing, setThing] = useState('cat');



  const clickThing = () => {
    axios
      .get('/get_comments')
      .then((res) => {   
        console.log('res', res);
        setThing(res.data[0].comment)
      })   
      .catch((err) => console.log('error', err))
  } 


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
      <button onClick={() => clickThing()} type="submit">Post</button>
    </form>
    {thing}
    <button onClick={clickThing}>plz push</button>
    </>
      );
}

export default CommentsComponent;