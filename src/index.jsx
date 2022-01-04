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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));

