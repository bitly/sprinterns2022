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
          <h1>Bitly API Explorer</h1>
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
          { (showForm && !shouldShowBio) && <Form endpoint={endpoint} method={method} /> }
          { shouldShowBio && <Bio bioToShow={bioToShow} /> }
          </div>
        </div>
        <img className= "logo" alt="bitly logo"src="https://cdn.iconscout.com/icon/free/png-256/bitly-1-432498.png"/>
        </>
    );
}

export default Home;
