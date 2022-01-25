import React, {useState, useEffect} from "react";
import axios from 'axios';
import ReactJson from 'react-json-view';

const APIRequest = ({method}) => {
    
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
        const [pathParams, setPathParams] = useState ({})
        const [response, setResponse] = useState ({})
        useEffect(() => {
            setPathParams({})
            setResponse({})
        }, [method])
    return <>
        <div className = "APIRequest leftside">
            <div className = "APIRequest__title" >{method.title}</div>
            <div className = "APIRequest__endpoint">API Endpoint</div>
                
            <div className = "APIRequest__bluebox">
                <div className = {`APIRequest__method--${methodtypefunction(method.type)}`} >{method.type}</div>
                <div className = "APIRequest__path" >{method.path}</div>
            </div>

            <div className = "APIRequest__accesstoken">Access Token</div>
            <div><form><input className = "APIRequest__accesstokenfield"></input></form></div>
                
            <div className = "APIRequest__pathparameters">Path Parameters</div>

            {method.parameters?.filter((param) => {
                return param.in === "path"
            }).map(parametersObject=> {
                return <div> 
                    {parametersObject.name} 

                        <div>
                            <input 
                                value={pathParams?.[parametersObject.name] ? pathParams[parametersObject.name] : ""}
                                placeholder={parametersObject.schema.type} 
                                onChange={(event) => {
                                    setPathParams({
                                        ...pathParams,
                                        [parametersObject.name]: event.target.value
                                    })
                                }
                            }></input>
                        </div>
                    </div>
            }
        ) }    
            <div className = "APIRequest__buttonscontainer">
                <div>
                <button className = "APIRequest__tryme" onClick = {() => {
            let requestPath = method.path
            for (let key in pathParams) {
                requestPath = requestPath.replace("{" + key + "}", pathParams[key])
            }
                axios
                    .post('api', {apiEndpoint: requestPath, authToken: "", params: {}, Method: method.type.toUpperCase()})
                    .then((response) => {
                        setResponse(response.data)
                    })
           
        }}> Try it! </button></div>
                <div><button className = "APIRequest__reset">Reset</button></div>
            </div>
        </div>

        <div className = "Response rightside">
            <div className = "Response__json">Response JSON</div>
            <div className = "Response__testresponse"><ReactJson src={response} theme="bright:inverted"/></div>
        </div>
    </>
}

export default APIRequest;