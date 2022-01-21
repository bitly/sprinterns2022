import React from 'react';
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
import HelpCenter from './HelpCenter.jsx';
import Forum from './Forum.jsx';
import Submit from './SubmitComment.jsx'

const App = () => {
    return (
      <Router>
        <Switch>
        <Route path="/APIInfo">
            <APIinfo />
          </Route>
          <Route path="/team">
            <Team />
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
            <Home />
          </Route>
        </Switch>
    </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));

