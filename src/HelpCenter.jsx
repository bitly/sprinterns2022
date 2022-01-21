import React from 'react';
import Header from './Header.jsx';
import { Link } from 'react-router-dom';

const FAQButton = ({buttonText}) => {
  return (
  <button className='FAQButton'>{buttonText}</button>
  );
}

const ForumButton = ({buttonText}) => {
  return (
  <button className="ForumButton">{buttonText}</button>
  );
}

const HelpCenter = () => {  
  return (
    <>
    <Header />
    <h1 className="HelpCenterText"> Shortening links can be confusing. What can we help with? </h1>
    <div className="ButtonContainer">
        <Link to = "/Forum"><ForumButton buttonText="Forum"></ForumButton></Link>
        <Link to ="/APIInfo"><FAQButton buttonText="FAQ"></FAQButton></Link> 
    </div>
    </>
  );
  }

export default HelpCenter;