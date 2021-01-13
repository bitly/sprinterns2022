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
    // const { useState } = React;

    // const [method, setMethod] = useState('');
    // const [endpoint, setEndpoint] = useState('');
    // const [showForm, setShowForm] = useState(false);
    // const [showIntro, setShowIntro] = useState(true);
    // const [showBio, setShowBio] = useState('');

    // const toggleButton = (method, endpoint) => {
    //   setMethod(method);
    //   setEndpoint(endpoint);
    //   setShowForm(true);
    //   setShowIntro(false);
    // }

    // const shouldShowBio = showBio.length > 0;
    // console.log('showBio', showBio);
    

    return (

      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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

