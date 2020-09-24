import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from  './pages/Home/index'
import Etapa01 from  './pages/Etapa01/index'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/01" exact component={Etapa01} />
      </Switch>
    </BrowserRouter>
  )
}