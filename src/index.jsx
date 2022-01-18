import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import{
     HashRouter as Router,
     Switch,
     Route,
     Link
} from "react-router-dom";
import './styles/main.scss';
import Home from './Home.jsx';
import Team from './Team.jsx';
import APIinfo from './APIinfo.jsx';
import SwaggerParser from "@apidevtools/swagger-parser";
import All_Comments from './All_Comments.jsx';

//This file is where the routes are being written. When you hit any of these routes the component 
//its tied to will be displayed. However, routes displyed on app.py not shown here 

const App = () => {

  const [api, setApi] = useState(null);

  useEffect(() => {
    const openSwaggerFile = async () => {
      try {
        let api = await SwaggerParser.validate("./static/v4.json");
        setApi(api);
        console.log(api);
        console.log("API name: %s, Version: %s", api.info.title, api.info.version);
      }
      catch(err) {
        console.error(err);
      }
    }

    openSwaggerFile();
  }, [])

    return (
      <Router>
        <Switch>
        <Route path="/APIInfo">
            <APIinfo />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/team-2022">
            <Team year={2022} />
          </Route>
          <Route path="/allComments">
            <All_Comments />
          </Route>
          <Route path="/">
              {api ? <Home api={api} /> : <div>Loading ...</div>}
          </Route>
        </Switch>
    </Router>
    );
    }
ReactDOM.render(<App />, document.getElementById('app'));

