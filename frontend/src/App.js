import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Main from "./Containers/Main/Main";
import Details from "./Containers/Details/Details";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/details/:id" component={Details}/>
      </Switch>
    </div>
  );
}

export default App;
