import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import './styles/main.scss';
import Form from './Form.jsx';

function Home() {
  const { useState } = React;
  const [method, setMethod] = useState('');
  const [endpoint, setEndpoint] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showIntro, setShowIntro] = useState(true);


    
    const toggleButton = (method, endpoint) => {
      setMethod(method);
      setEndpoint(endpoint);
      setShowForm(true);
      setShowIntro(false);
    }

    return (
        <>
        <div className="header">
            <div className="navbar">
  <div className="dropdown">
    <button className="dropbtn">Home
    </button>
    <div className="dropdown-contenttwo">
      <Link to="/Team">Meet The Team</Link>
      <Link to="/Comments">Help Center</Link>
    </div>
  </div>
 <div className="dropdownone">
    <button className="dropbtnone">API
    </button>
    <div className="dropdown-contentone">
      <Link to="/APIinfo">What is API?</Link>
      <a href="#">API Explorer</a>
    </div>
  </div>
</div>
        </div>
        <div className="main">
    
          <div className="sidebar">
        
            <div className="sidenav">
            <a href="#" onClick={() => toggleButton("GET",'/bitlinks/{Your_bitlink}')}><span className="Get">Retrieve</span> a Bitlink</a>
            <a href="#" onClick={() => toggleButton("GET",'/bitlinks/{Your_bitlink}/clicks')}><span className="Get">GET</span> clicks for a Bitlink</a>
            <a href="#" onClick={() => toggleButton("GET",'/groups/{Your_group_guid}/bitlinks')}><span className="Get">Retrieve</span> Bitlinks by Group</a>
            <a href="#" onClick={() => toggleButton("POST",'/expand')}><span className="Post">Expand</span> a Bitlink</a>
            <a href="#" onClick={() => toggleButton("POST",'/bitlinks')}><span className="Post">Create</span> a Bitlink</a>
            <a href="#" onClick={() => toggleButton("POST",'/shorten')}><span className="Post">Shorten</span> a Link</a>
            <a href="#" onClick={() => toggleButton("PATCH",'/bitlinks/{bitlink}')}><span className="Patch">Update</span> a Bitlink</a>
            <a href="#" onClick={() => toggleButton("PATCH",'/user')}><span className="Patch">Update</span> a User</a>
            <a href="#" onClick={() => toggleButton("PATCH",'/groups/{group_guid}')}><span className="Patch">Update</span> a Group</a>
            <a href="#" onClick={() => toggleButton("DELETE",'/groups/{group_guid}')}><span className="Delete">Delete</span> a Group</a>
          </div>
        </div>
        <div className="center">
          {<div className="centerButtons">
            <button className='methodButton getbutton' onClick={() => toggleButton("GET")}>Get</button>
            <button className='methodButton postbutton' onClick={() => toggleButton("POST")}>Post</button>
            <button className='methodButton patchbutton' onClick={() => toggleButton("PATCH")}>Patch</button>
            <button className='methodButton deletebutton' onClick={() => toggleButton("DELETE")}>Delete</button>
          </div>}
          <div className="centerCard">
            {showIntro && <div className="intro">
              <p>
                Introduction:Is this reloading properly? Welcome to the Bitly API!If you'd like to use Bitly to shorten, brand, share, or retrieve data from links programmatically, you've come to the right place.If you're interested in integrating
              </p>
              <p>
                     your app or software platform with Bitly, you'll need to register and authenticate your service with our API. To do so please contact us at API_sales@bit.ly
              </p>
              <p>
                We currently provide our documentation in the form of an OpenAPI 2.0 document.We do not support any code-generation at this time but feel free to use the specification if you would like.
              </p>
            </div> }
          </div>
          <div>
          {(showForm) && <Form endpoint={endpoint} method={method} />}
          </div>

          <div className="footer">
            <div className="footertext">
              <p className="center-links">
                <a className="ft link-1" href="#"> Home </a>
                <a className="ft link-2" href="#"> About </a>
                <a className="ft link-3" href="#"> Help </a>
                <a className="ft link-4" href="#"> Legal </a>
                <a className="ft link-5" href="#"> Contact </a>
              </p>
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-twitter"></a>
              <a href="#" className="fa fa-github"></a>
              <a href="#" className="fa fa-instagram"></a>
              <a href="#" className="fa fa-linkedin"></a>
            </div>
            <p className="under-text"> Bitly Winterns &copy; 2021</p>
          </div>
          </div>
          <Link to="/Home"><img className= "logo" alt="bitly logo"src="https://docrdsfx76ssb.cloudfront.net/static/1610484866/pages/wp-content/uploads/2019/02/bitly.png"/></Link>
        </div>
    </>
  );
        
 }

export default Home;
