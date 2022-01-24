import React from "react";

const APIRequest = ({method}) => {
    return <div className = "APIRequest">
        <div className = "APIRequest__title" >{method.title}</div>
        <div className = "APIRequest__endpoint">API Endpoint</div>
       
        <div className = "APIRequest__bluebox">
            <div className = "APIRequest__method" >{method.type}</div>
            <div className = "APIRequest__path" >{method.path}</div>
        </div>

        <div className = "APIRequest__accesstoken">Access Token</div>
        <div><form><input className = "APIRequest__accesstokenfield"></input></form></div>
       
        <div className = "APIRequest__pathparameters">Path Parameters</div>
        <div className = "APIRequest__rbschema">Request Body Schema</div>
       
        <div className = "APIRequest__buttonscontainer">
            <div><button className = "APIRequest__tryme">Try Me!</button></div>
            <div><button className = "APIRequest__reset">Reset</button></div>
        </div>

        <div className = "APIRequest__responsejson">Response JSON</div>
    </div>
}

export default APIRequest;