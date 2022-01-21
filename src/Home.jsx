import React, {useState} from 'react'; 
import './styles/main.scss';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx'
import APIRequest from "./APIRequest.jsx";

function Home({api}) {

const getSidebarData = (api) => {
  const paths = api.paths;
  const data = [];
  for (let route in paths) {
    const methods = paths[route];
    for (let methodType in methods) {
      const method = methods[methodType];
      const title = method.summary;
      if (!title) break
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
const [selectedMethod, setSelectedMethod] = useState(null);


    return (
        <>
        <Header />  
        <div className = "main_container">
          <Sidebar onClick = {(type, path
          ) => {
            const methodData = api.paths[path][type]
            setSelectedMethod({
              title: methodData.summary,
              type: type,
              path: path,
              parameters: methodData.parameters,
              requestBody: methodData.requestBody,
              description: methodData.description,
            })
          }} items = {sidebarData}/>
          {selectedMethod && <APIRequest method = {selectedMethod}/>} 
        </div>
    </>
  );
        
 }

export default Home;
