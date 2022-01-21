import React from 'react';
import KVInputs from "./KVInputs.jsx";
import axios from 'axios';
import ReactJson from 'react-json-view'

const Form = ({method, endpoint}) => {
  const { useState, useEffect } = React;

  const [response, setResponse] = useState({});
  const [authToken, setAuthToken] = useState('');
  const [apiEndpoint, setApiEndpoint] = useState(endpoint);
  const [params, setParams] = useState([{key:'', value:''}]);

  useEffect(() => {
    setApiEndpoint(endpoint);
  }, [endpoint])

  const handleKeyValueChange = (event, type, idx) => {  
    let newValue;
    if(type === 'key') { 
      newValue = { key: event.target.value, value: params[idx].value };
    }  
    if(type === 'value') {
      newValue = { key: params[idx].key, value: event.target.value };
    }  
    const newParams = [
      ...params.slice(0, idx),
      newValue,
      ...params.slice(idx + 1)
    ]
    setParams(newParams);
  }
  
  const addKeyVal = () => {
    setParams([...params, {key:"", value:""}]);
  }

  const handleSubmit = () => {
    const SERVER_URL = ""
    const arrayToObject = (array) =>
      array.reduce((obj, item) => {
        if(item.key) {
            obj[item.key] = item.value
        }
        return obj
    }, {});
    const keyvalObject = arrayToObject(params)
    axios    
      .post(SERVER_URL + 'api', {apiEndpoint: apiEndpoint, authToken: authToken, params: keyvalObject, Method: method})
      .then((res) => {   
        setResponse(res.data)
      })   
  }  
    
  const handleReset = () => {
    setAuthToken('');
    setApiEndpoint('');
    setParams([{key:'', value:''}]);
  }

  return (
    <div className="inputForms">
      <center>
        <label>API Endpoint</label><br />
        <input className ="endpointBox" value={method} disabled={true} type="text" name='method'/> 
        <input className ="endpointBox" value={apiEndpoint}
        type="text" name='apiEndpoint' onChange={(event) => setApiEndpoint(event.target.value)}
        /> 
        <br /> 
        <br />
        <label>Authorization Token</label>
        <br />
        <input className ="authTokenBox" value={authToken} type="text" name='authToken' onChange={(event) => setAuthToken(event.target.value)} /> 
        <br /> 
        <br />
        <KVInputs handleChange={handleKeyValueChange} params={params}/>
        <button className = 'add' onClick={addKeyVal}>Add+</button>
      </center>
      <br /> 
      <button className="submit" onClick={handleSubmit}>Submit</button>
      <button className="resetbutton" onClick={handleReset}>Reset</button> 
      <div className="resultsBox"> 
        <center>
          <div>Results</div>
        </center>  
        <ReactJson src={response} theme="bright:inverted"/>  
      </div>   
    </div>
  );
}

export default Form;