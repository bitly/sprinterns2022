import React from 'react';
import './styles/main.scss';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';

function Home({api}) {

const createSidebarData = (api) => {
  return null
}

    return (
        <>
        <Header />
        {/*example.map(endpointObject=>{
          return <div><span>{endpointObject.title}</span></div>
        })*/}
        <Sidebar items = {createSidebarData(api)}/>
        
    </>
  );
        
 }

export default Home;
