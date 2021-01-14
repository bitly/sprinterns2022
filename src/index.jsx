import React from 'react';
import ReactDOM from 'react-dom';
import{
     HashRouter as Router,
     Switch,
     Route,
     Link
} from "react-router-dom";
import './styles/main.scss';
import Form from './Form.jsx';
import ExampleComponent from './wintern-bios/ExampleComponent.jsx';
import RomasComponent from './wintern-bios/RomasComponent.jsx';
import Home from './Home.jsx';

const App = () => {
    return (

      <Router>
        <Switch>
          <Route path="/Lara">
            <Home view="Lara"/>
          </Route>
          <Route path="/Andrea">
            <Home view="Andrea"/>
          </Route>
          <Route path="/Dana">
            <Home view="Dana"/>
          </Route>
          <Route path="/Tajra">
            <Home view="Tajra"/>
          </Route>
          <Route path="/Roma">
              <Home view="Roma" />
          </Route>
          <Route path="/">
            <Home view ="" />
          </Route>
        </Switch>
    </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));

