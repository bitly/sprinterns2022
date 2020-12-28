import React from 'react';
import KVInputs from "./KVInputs.jsx";
import axios from 'axios';
import ReactJson from 'react-json-view'

const Form = () => {
  const { useState } = React;
  const end = '';
  const formV = '';
  const [response, setResponse] = useState({});
  const [authToken, setAuthToken] = useState('');
  const [apiEndpoint, setApiEndpoint] = useState(end);
  const [params, setParams] = useState([{key:'', value:''}]);

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
    console.log("WE CLICKED THE ADD BUTTON") 
    setParams([...params, {key:"", value:""}]);
  }

  const handleSubmit = () => {
    console.log('BUTTON CLICKED')
    const SERVER_URL = "https://5000-f9e7f7e4-c57e-43fb-8340-f9648942ba09.ws-us02.gitpod.io/"
    console.log(SERVER_URL + '/api')
    const arrayToObject = (array) =>
        array.reduce((obj, item) => {
            if(item.key) {
                obj[item.key] = item.value
            }
            return obj
    }, {})
  
    const keyvalObject = arrayToObject(params)
    console.log(keyvalObject) 
        axios
            .post(SERVER_URL + 'api', {apiEndpoint: apiEndpoint, authToken: authToken, params: keyvalObject, Method:this.props.Method})
            .then((res) => {   
                console.log(res.data)
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
            <input className ="endpointBox" value={formV}
            type="text" name='apiEndpoint'onChange={(e) => {
              console.log('E', e.target.value);
              setApiEndpoint(e.value)}
            } 
            /> <br /> <br />
        <label>Authorization Token</label><br />
            <input className ="authTokenBox" value={authToken}
            type="text" name='authToken' onChange={setAuthToken} 
        /> <br /> <br />
      
        <KVInputs handleChange={handleKeyValueChange} params={params}/>
          <button className = 'add' onClick={addKeyVal}>Add+</button>
          </center>
          <div className="resultsBox"> 
            <center>
              <h2>Results</h2>
            </center> 
            <ReactJson src={response} theme="bright:inverted"/>
        </div>   
            <br /> <button className="submit" onClick={handleSubmit}>Submit</button>
            <button className="resetbutton" onClick={handleReset}>Reset</button> 
    </div>
  );
}

// export default class Form extends React.Component {
//  constructor(props) {
//     super(props);
//     this.state = {
//         response: {},
//         authToken: '',
//         apiEndpoint: this.props.End,
//         params: [{key:"", value:""}],
        
//     };    

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleReset = this.handleReset.bind(this);
//     this.handleKeyValueChange - this.handleKeyValueChange.bind(this);
//   }
  
//  handleChange(event) {
//    console.log('target', event.target);
//      this.setState({ [event.target.name]: event.target.value })
// }

// addKeyVal = (event) => {
//     console.log(this.state.params);
//     console.log("WE CLICKED THE ADD BUTTON") 
//     console.log(this.state);  
//     this.setState((prevState) => ({
//       params: [...prevState.params, {key:"", value:""}],
//     }));
// }

// handleSubmit() {
//     console.log('BUTTON CLICKED')
//     const SERVER_URL = "https://5000-f9e7f7e4-c57e-43fb-8340-f9648942ba09.ws-us02.gitpod.io/"
//     console.log(SERVER_URL + '/api')
//     const arrayToObject = (array) =>
//         array.reduce((obj, item) => {
//             if(item.key) {
//                 obj[item.key] = item.value
//             }
//             return obj
//     }, {})
 
//    const keyvalObject = arrayToObject(this.state.params)
//    console.log(keyvalObject) 

//         axios
//             .post(SERVER_URL + 'api', {apiEndpoint: this.state.apiEndpoint, authToken: this.state.authToken, params: keyvalObject, Method:this.props.Method})
//             .then((res) => {   
//                 console.log(res.data)
//                 this.setState({
//                     response: res.data
//                 })
//             })   
//     }  
    
//     handleReset(){
//         this.setState({
//             authToken: '',
//             apiEndpoint: '',
//             params: [{key:"", value:""}]
//         });

//     }

//  handleKeyValueChange = (event, type, idx) => { 
//      console.log("typed")   
//     if(type === 'key') { 
//         const newParams = [
//             ...this.state.params.slice(0, idx),
//             { key: event.target.value, value: this.state.params[idx].value }, 
//             ...this.state.params.slice(idx + 1)
//         ] 
//         this.setState((prevState) => ({
//             params: newParams
//         }));
//     }  
//     if(type === 'value') {
//         const newParams = [
//             ...this.state.params.slice(0, idx),
//             { key: this.state.params[idx].key, value: event.target.value }, 
//             ...this.state.params.slice(idx + 1)
//         ] 
//         this.setState((prevState) => ({
//             params: newParams
//         }));
//     }   
// }

// render(){
//     let{authToken, apiEndpoint, params} = this.state
//     return (
//        <div className="inputForms">
//           <center>
//                 <label>API Endpoint</label><br />
//                     <input className ="endpointBox" value={this.state.apiEndpoint}
//                     type="text" name='apiEndpoint'onChange={this.handleChange} 
//                     /> <br /> <br />
//             <label>Authorization Token</label><br />
//                 <input className ="authTokenBox" value={this.state.authToken}
//                 type="text" name='authToken' onChange={this.handleChange} 
//             /> <br /> <br />
          
//             <KVInputs handleChange={this.handleKeyValueChange} params={params}/>
//              <button className = 'add' onClick={this.addKeyVal}>Add+</button>
//              </center>
//              <div className="resultsBox">  {/* results box code begins  */}
//                     <center><h2>Results</h2></center> 
//                     {/* <div> {paramsList}</div> */}
//                     {/* <center>  */}
//                         <ReactJson src={this.state.response} theme="bright:inverted"/>
//                     {/* </center>  */}
//             </div>   {/*  results box code ends  */} 
//                 <br /> <button className = "submit" onClick={this.handleSubmit}>Submit</button>
//                 <button className="resetbutton" onClick={this.handleReset}>Reset</button> 
//         </div>
//         )
//     }   
// } 

export default Form;