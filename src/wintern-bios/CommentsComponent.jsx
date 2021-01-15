import React from 'react';

const CommentsComponent = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);
  const randomNum = Math.random();


  return (
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
      <button type="submit">Post</button>
    </form>
      );
}

export default CommentsComponent;