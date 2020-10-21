import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
// pages
import Home from './pages/Home'
import Map from './pages/Map'

function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact={true}/>
      <Route path='/map' component={Map} exact={true}/>
      <Redirect to="/" />
    </Switch>    
  </BrowserRouter>
  );
}

export default App;
