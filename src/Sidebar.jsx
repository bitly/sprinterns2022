
import React from 'react';
import './styles/new_sidebar.scss';

const Sidebar = ({items}) => {
    

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
        {items.map(endpointObject=>{
          return <div className='sidebar-new-object'><div className={`sidebar-type--${methodtypefunction(endpointObject.type)}`}><h4>{endpointObject.type}</h4></div><div className='sidebar-title'><a href="#"><h5>{endpointObject.title}</h5></a></div></div>
        })}

      </div>
    );
  }
  
  export default Sidebar;