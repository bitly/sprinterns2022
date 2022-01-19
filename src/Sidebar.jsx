
import React from 'react';
import './styles/new_sidebar.scss';

const Sidebar = ({items}) => {
    const example = [{
    title: "Retrieve a Bitlink", type: "GET", path: "/bitlinks/{bitlink}"
    },{
    title: "Get Clicks for a Bitlink", type: "GET", path: "/bitlinks/{bitlink}"
    },{
    title: "Retrieve Bitlinks by Group", type: "GET", path: "/bitlinks/{bitlink}"
    },{
    title: "Expand a Bitlink", type: "POST", path: "/bitlinks/{bitlink}"
    },{
    title: "Create a Bitlink", type: "POST", path: "/bitlinks/{bitlink}"
    },{
    title: "Shorten a Link", type: "POST", path: "/bitlinks/{bitlink}"
    },{
    title: "Update a Bitlink", type: "PATCH", path: "/bitlinks/{bitlink}"
    },{
    title: "Update a User", type: "PATCH", path: "/bitlinks/{bitlink}"
    },{
    title: "Update a Group", type: "PATCH", path: "/bitlinks/{bitlink}"
    },{
    title: "Delete a Group", type: "DEL", path: "/bitlinks/{bitlink}"
    }]

    const methodtypefunction = (methodtype) => {
            if(methodtype === 'GET') { 
                return 'green'
            } else if (methodtype === 'POST') 
                { return 'blue'
            } else if (methodtype === 'PATCH') {
                return 'orange'
            } else if (methodtype === 'DEL') {
                return 'red'
            }
    }

    return (
      <div className='sidebar-new'>
        {example.map(endpointObject=>{
          return <div className='sidebar-new-object'><div className={`sidebar-type--${methodtypefunction(endpointObject.type)}`}><h4>{endpointObject.type}</h4></div><div className='sidebar-title'><a href="#"><h5>{endpointObject.title}</h5></a></div></div>
        })}

      </div>
    );
  }
  
  export default Sidebar;