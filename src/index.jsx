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

const App = () => {
    return (

      <Router>
        <Switch>
          <Route path="/Lara">
            <Home bioToShow="Lara"/>
          </Route>
          <Route path="/Andrea">
            <Home bioToShow="Andrea"/>
          </Route>
          <Route path="/Dana">
            <Home bioToShow="Dana"/>
          </Route>
          <Route path="/Tajra">
            <Home bioToShow="Tajra"/>
          </Route>
          <Route path="/Roma">
              <Home bioToShow="Roma" />
          </Route>
           <Route path="/Comments">
            <Home bioToShow="Comments" />
          </Route>
          <Route path="/APIExample">
            <Home bioToShow="APIExample" />
          </Route>
          <Route path="/Meetteam">
            <Home bioToShow="Meetteam" />
          </Route>
          <Route path="/APIinfo">
            <Home bioToShow="APIinfo" />
          </Route>
          <Route path="/CardsComponent">
            <Home bioToShow="CardsComponent" />
          </Route>
          <Route path="/">
            <Home bioToShow="" />
          </Route>
        </Switch>
    </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));

