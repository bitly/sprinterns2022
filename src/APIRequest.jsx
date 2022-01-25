import React from "react";

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
                
            <div className = "APIRequest__buttonscontainer">
                <div><button className = "APIRequest__tryme">Try Me!</button></div>
                <div><button className = "APIRequest__reset">Reset</button></div>
            </div>
        </div>

        <div className = "Response rightside">
            <div className = "Response__json">Response JSON</div>
            <div className = "Response__testresponse">test response</div>
        </div>

    </>
}

export default APIRequest;