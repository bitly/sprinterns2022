
import React from 'react';
import './styles/new_sidebar.scss';

const Sidebar = ({items, onClick}) => {
    

    const methodtypefunction = (methodtype) => {
            if(methodtype === 'get') { 
                return 'green'
            } else if (methodtype === 'post') 
                { return 'blue'
            } else if (methodtype === 'patch') {
                return 'orange'
            } else if (methodtype === 'delete') {
                return 'red'
            }
    }

    return (
      <div className='sidebar-new'>
        {items.map(endpointObject=>{
          return <div className='sidebar-new-object' onClick = {(
          ) => {
            onClick(endpointObject.type, endpointObject.path)
          }}><div className={`sidebar-type--${methodtypefunction(endpointObject.type)}`}><h4>{endpointObject.type}</h4></div><div className='sidebar-title'><a href="#"><h5>{endpointObject.title}</h5></a></div></div>
        })}

      </div>
    );
  }
  
  export default Sidebar;