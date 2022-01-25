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
import AngesComponent from './wintern-bios/2022/AngesComponent.jsx';
import KadiatouComponent from './wintern-bios/2022/KadiatouComponent.jsx';
import LaurenComponent from './wintern-bios/2022/LaurenComponent.jsx';
import SkylerComponent from './wintern-bios/2022/SkylerComponent.jsx';
import MargaretComponent from './wintern-bios/2022/MargaretComponent.jsx';
import HelpCenter from './HelpCenter.jsx';
import Forum from './Forum.jsx';
import Submit from './SubmitComment.jsx'


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
            </Route>
          <Route path="/ange-louis">
            <Header />
            <AngesComponent />
          </Route>
          <Route path="/kadiatou-diallo">
            <Header />
            <KadiatouComponent />
          </Route>
          <Route path="/lauren-avilla">
            <Header />
            <LaurenComponent />
          </Route>
          <Route path="/skyler-basco">
            <Header />
            <SkylerComponent />
          </Route>
          <Route path="/margaret-diaz">
            <Header />
            <MargaretComponent />
            </Route>
          <Route path="/allComments">
            <CommentsPage />
            </Route>
          <Route path="/HelpCenter">
            <HelpCenter />
            </Route>
          <Route path="/Forum">
            < Forum />
          </Route>
          <Route path="/Submit">
            < Submit />
          </Route>
          <Route path="/">
              {api ? <Home api={api} /> : <div>Loading ...</div>}
          </Route>
        </Switch>
    </Router>
    );
    }
ReactDOM.render(<App />, document.getElementById('app'));

