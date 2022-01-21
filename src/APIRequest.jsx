import React from "react";

const APIRequest = ({method}) => {
    return <div className = "APIRequest">
        <div className = "APIRequest__title" >{method.title}</div>
        <div className = "APIRequest__endpoint">API Endpoint</div>
        <div className = "APIRequest__path" >{method.path}</div>
        <div className = "APIRequest__accesstoken">Access Token</div>
        <div className = "APIRequest__pathparameters">Path Parameters</div>
        <div className = "APIRequest__rbschema">Request Body Schema</div>

    </div>
}

export default APIRequest;