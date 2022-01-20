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
import CommentsPage from './CommentsPage.jsx';


import Header from './Header.jsx';
const App = () => {
const [api, setApi] = useState(null);

useEffect(() => {
  const openSwaggerFile = async () => {
    try {
      let api = await SwaggerParser.validate("./static/v4.json");
      setApi(api);
      console.log("API name: %s, Version: %s", api.info.title, api.info.version);
      console.log(api);
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
            <CommentsPage />
          <Route path="/">
              {api ? <Home api={api} /> : <div>Loading ...</div>}
          </Route>
        </Switch>
    </Router>
    );
    }
ReactDOM.render(<App />, document.getElementById('app'));

