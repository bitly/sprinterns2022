import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import './styles/main.scss';
import Form from './Form.jsx';
import Bio from './wintern-bios/Bio.jsx';

const Home = ({bioToShow}) => {
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

    const shouldShowBio = bioToShow.length > 0;
    
    return (
        <>
        <div className="header">
            <div class="navbar">
  <div class="dropdown">
    <button class="dropbtn">Home
      {/* <i class="fa fa-caret-down"></i> */}
    </button>
    <div class="dropdown-contenttwo">
      <a href="#">Meet The Team</a>
      <a href="https://5000-f90c103f-207a-4a06-b5f7-18ea2ff191af.ws-us03.gitpod.io/#/Comments">Help Center</a>
      <a href="#">Space</a>
    </div>
    
  </div>
 <div class="dropdownone">
    <button class="dropbtnone">API
      {/* <i class="fa fa-caret-down"></i> */}
    </button>
    <div class="dropdown-contentone">
      <a href="#">What is API?</a>
      <a href="#">Example of API</a>
      <a href="#">API Explorer</a>
    </div>
  </div>
</div>
         {/* <h3>Bitly API Explorer</h3> */}
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
            <Link to="/Andrea">Andrea</Link>
            <Link to="/Tajra">Tajra</Link>
            <Link to="/Roma">Roma</Link>
            <Link to="/Lara">Lara</Link>
            <Link to="/Dana">Dana</Link>
            <Link to="/Comments">Comments</Link>
            <Link to="/Meetteam">Meet The Team</Link>
          </div>
        </div>
        <div className="center">
          {!shouldShowBio && <div className="centerButtons">
            <button className='methodButton getbutton'  onClick={() => toggleButton("GET")}>Get</button>
            <button className='methodButton postbutton' onClick={() => toggleButton("POST")}>Post</button>
            <button className='methodButton patchbutton' onClick={() => toggleButton("PATCH")}>Patch</button>
            <button className='methodButton deletebutton' onClick={() => toggleButton("DELETE")}>Delete</button>
          </div> }
          <div className="centerCard">
            {
              showIntro && !shouldShowBio && <div className="intro">
                <p>
                  Introduction: Welcome to the Bitly API! If you'd like to use Bitly to shorten, brand, share, or retrieve data from links programmatically, you've come to the right place. If you're interested in integrating
                </p>
                <p>
                  your app or software platform with Bitly, you'll need to register and authenticate your service with our API. To do so please contact us at API_sales@bit.ly
                </p> 
                <p>
                  We currently provide our documentation in the form of an OpenAPI 2.0 document. We do not support any code-generation at this time but feel free to use the specification if you would like.
                </p> 
                <Bio myProp={'myProp'} color={'blue'} />
                <Bio myProp={'myProp'} />
                <Bio myProp={'myProp'} />
                <Bio myProp={'myProp'} />
              </div>
              
            }
          </div>
          <div className="footer"> 
           <div className="footertext">
            <p class="center-links">
              <a class="ft link-1" href="#">Home &emsp; </a>
              <a class="ft link-2" href="#">&emsp; &emsp; About &emsp; </a>
              <a class="ft link-3" href="#">&emsp; &emsp; Help &emsp; </a>
              <a class="ft link-4" href="#">&emsp; &emsp; Legal &emsp; </a>
              <a class="ft link-5" href="#">&emsp; &emsp; Contact &emsp; </a>
            </p>
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-github"></a>
                <a href="#" className="fa fa-instagram"></a>
                <a href="#" className="fa fa-linkedin"></a>
            </div>
            <p class="under-text"> Bitly Winterns &copy; 2021</p>
        </div>	        
       

          { (showForm && !shouldShowBio) && <Form endpoint={endpoint} method={method} /> }
          { shouldShowBio && <Bio bioToShow={bioToShow} /> }
          </div>
        
        <a href="https://5000-f90c103f-207a-4a06-b5f7-18ea2ff191af.ws-us03.gitpod.io/#/"><img className= "logo" alt="bitly logo"src="https://docrdsfx76ssb.cloudfront.net/static/1610484866/pages/wp-content/uploads/2019/02/bitly.png"/></a>
        </div>
        </>
    );
}

export default Home;