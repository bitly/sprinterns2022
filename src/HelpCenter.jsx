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
    {/* <div className='webContainer'> */}
    <div className="HelpCenterText"> Shortening links can be confusing. What can we help with? </div>
    <div className="ButtonContainer">
        <Link to = "/Forum"><ForumButton buttonText="FORUM"></ForumButton></Link>
        <Link to ="/APIInfo"><FAQButton buttonText="FAQ"></FAQButton></Link> 
    {/* </div> */}
    </div>
    </>
  );
  }

export default HelpCenter;