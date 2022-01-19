import React from 'react';
import './styles/main.scss';
import Header from './Header.jsx';

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
    </>
  );
        
 }

export default Home;
