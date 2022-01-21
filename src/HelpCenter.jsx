import React from 'react';
import Header from './Header.jsx';
import {Link} from "react-router-dom";
//import Button from './Buttons.jsx';

const FAQButton = ({buttonText}) => {
    return (
    <button className="FAQButton">{buttonText}</button>
    );
}
const ForumButton = ({buttonText}) => {
    return (
    <button className="ForumButton">{buttonText}</button>
    );
}

const HelpCenter = () => {

    return(
        <>
            <Header />
            <body>
            <div className="HelpCenterText"> 
            <h1 > Shortening links can be confusing. What can we help with? </h1>
            </div> 
            </body>
            <div className="Buttonss">
            <Link to="/Forum"><ForumButton buttonText="FORUM" /></Link>
            <Link to="/APIInfo"><FAQButton buttonText="FAQ" /></Link>
            </div>
        </>
    );
}



export default HelpCenter;