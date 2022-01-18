import React from 'react';
import './styles/main.scss';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx'

function Home({api}) {

const getSidebarData = (api) => {
  const paths = api.paths;
  const data = [];
  for (let route in paths) {
    const methods = paths[route];
    for (let methodType in methods) {
      const method = methods[methodType];
      const title = method.summary;
      data.push({
        title: title,
        type: methodType,
        path: route
      })
    }
  }
  return data;
}

const sidebarData = getSidebarData(api);

    return (
        <>
        <Header />  
        <Sidebar items = {sidebarData}/>
        
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
            {!showForm && <div>
              <p>
                Introduction: Welcome to the Bitly API! If you'd like to use Bitly to shorten, brand, share, or retrieve data from links programmatically, you've come to the right place.If you're interested in integrating
              </p>
              <p>
                your app or software platform with Bitly, you'll need to register and authenticate your service with our API. To do so please contact us at API_sales@bit.ly
              </p>
              <p>
                We currently provide our documentation in the form of an OpenAPI 2.0 document. We do not support any code-generation at this time but feel free to use the specification if you would like.
              </p>
            </div> }
          <Footer />

          {(showForm) && <Form endpoint={endpoint} method={method} />} //this is being passed into Form.jsx to specify method and endpoint. delete
 
          </div>
        </div>
    </>
  );
        
 }

export default Home;
