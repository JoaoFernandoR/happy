import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
// pages
import Home from './pages/Home'
import Map from './pages/Map'
import CreateOrphanage from './pages/CreateOrphanage'
import Orphanage from './pages/Orphanage'

function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact={true}/>
      <Route path='/map' component={Map} exact={true}/>
      <Route path='/orphanages/create' component={CreateOrphanage} exact={true}/>
      <Route path='/orphanages/:id' component={Orphanage} exact={true}/>
      <Redirect to="/" />
    </Switch>    
  </BrowserRouter>
  );
}

export default App;
